import { createContext, useEffect, useState } from "react";
import { getCookie, writeCookie } from "../../utils";
import getSpotifyAuthUrl from "./fn/getSpotifyAuthUrl";
import getSpotifyTokens from "./fn/getSpotifyTokens";
import refreshSpotifyTokens from "./fn/refreshSpotifyTokens";

// Lessons learnt from writing this context:
//
// 1. Make your use effects small, and succinct.
// 2. Any action that causes a re-render, will cause a code fork.
// 3. Console logs will help a lot to follow the code-flow.
// 4. Extracting and refactoring methods will help.
// 5. Ideally, the useEffect itself should be a Facade, when handling multiple code-forks.

const SpotifyAuthContext = createContext();

function SpotifyAuthProvider({ children }) {
	const [refreshToken, setRefreshToken] = useState("");
	const [accessToken, setAccessToken] = useState("");
	const [expiresIn, setExpiresIn] = useState(3600);

	//#region Token Functions

	async function refreshAccessToken() {
		const tokens = await refreshSpotifyTokens(refreshToken);
		setAccessToken(tokens.accessToken);
		setExpiresIn(tokens.expiresIn || 3600);
	}

	function persistAccessToken() {
		const interval = setInterval(async () => {
			await refreshAccessToken();
		}, (expiresIn - 60) * 1000);
		return () => clearInterval(interval);
	}

	async function getAccessToken(code) {
		window.history.pushState({}, null, "/");
		const tokens = await getSpotifyTokens(code);
		// HACK: Use a known-good refresh token as a fall-back. Prototype only.
		if (tokens.refreshToken == null) {
			console.log("Using fallback refresh token for demo purposes only.");
			tokens.refreshToken = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN ?? "";
		}
		writeCookie("swapi_refresh_token", tokens.refreshToken, 365);
		setAccessToken(tokens.accessToken);
		setRefreshToken(tokens.refreshToken);
		setExpiresIn(tokens.expiresIn || 3600);
	}

	//#endregion

	//#region Authentication Functions

	function handleCookieCheck() {
		// 1. If swapi_refresh_token cookie exists:
		console.log("1. No token found, checking cookies.");
		const storedToken = getCookie("swapi_refresh_token");
		if (storedToken) {
			console.log("Cookie found. Using that.");
			return storedToken;
		}
	}

	async function handleAuthCodeCheck() {
		// 2. If authCode exists:
		console.log("2. Checking whether auth code exists in URL...");
		const code = new URLSearchParams(window.location.search).get("code");
		console.log("Code: ", code);
		if (code) {
			console.log("Auth code found. Obtaining tokens from server...");
			await getAccessToken(code);
			return false;
		}
		return true;
	}

	function handleRedirect() {
		// 3. If we cannot find a refresh token by any means, relocate to Spotify for login.
		console.log("3. No refresh token or auth code can be located. Signing into Spotify...");
		window.location.href = getSpotifyAuthUrl([
			"streaming",
			"user-read-email",
			"user-read-private",
			"user-library-read",
			"user-library-modify",
			"user-read-playback-state",
			"user-modify-playback-state",
		]);
	}

	//#endregion

	//#region useEffects

	useEffect(() => {
		accessToken && console.log("Access Token:", accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!refreshToken) return;
		(async () => await refreshAccessToken())();
		return persistAccessToken();
	}, [refreshToken]);

	useEffect(() => {
		if (refreshToken) return;
		const storedToken = handleCookieCheck();
		if (storedToken) {
			setRefreshToken(storedToken);
			return;
		}
		(async () => {
			const redirect = await handleAuthCodeCheck();
			console.log("Redirect: ", redirect);
			if (redirect) handleRedirect();
		})();
	}, []);

	//#endregion

	return <SpotifyAuthContext.Provider value={{ accessToken }}>{children}</SpotifyAuthContext.Provider>;
}

export { SpotifyAuthContext, SpotifyAuthProvider };
