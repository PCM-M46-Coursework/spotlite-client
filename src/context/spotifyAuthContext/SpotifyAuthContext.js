import { createContext, useEffect, useState } from "react";
import { getCookie, writeCookie } from "../../utils";
import getSpotifyAuthUrl from "./fn/getSpotifyAuthUrl";
import getSpotifyTokens from "./fn/getSpotifyTokens";
import refreshSpotifyTokens from "./fn/refreshSpotifyTokens";

const SpotifyAuthContext = createContext();
const code = new URLSearchParams(window.location.search).get("code");

function SpotifyAuthProvider({ children }) {
	const [authCode, setAuthCode] = useState(code);
	const [refreshToken, setRefreshToken] = useState("");
	const [accessToken, setAccessToken] = useState("");
	const [expiresIn, setExpiresIn] = useState(""); // 3600

	useEffect(() => {
		async function refreshAccessToken() {
			const tokens = await refreshSpotifyTokens(refreshToken);
			setAccessToken(tokens.accessToken);
			setExpiresIn(tokens.expiresIn);
		}

		async function persistAccessToken() {
			return setInterval(async () => {
				await refreshAccessToken();
			}, (expiresIn - 60) * 1000);
		}

		async function getAccessToken() {
			const tokens = await getSpotifyTokens(authCode);
			setAccessToken(tokens.accessToken);
			setRefreshToken(tokens.refreshToken);
			setExpiresIn(tokens.expiresIn);
			window.history.pushState({}, null, "/");
			setAuthCode("");
		}

		(async () => {
			// 0. If refresh token already exists...
			if (refreshToken && expiresIn) {
				writeCookie("swapi_refresh_token", refreshToken, 365);
				const interval = await persistAccessToken();
				return () => clearInterval(interval);
			}

			// 1. Check swapi_refresh_token cookie.
			const storedToken = getCookie("swapi_refresh_token");

			// 2. If swapi_refresh_token cookie exists:
			if (!refreshToken && storedToken) {
				setRefreshToken(storedToken);
				return;
			}

			// 3. If authCode exists:
			if (authCode) {
				await getAccessToken();
				return;
			}

			// 4. If we cannot find a refresh token by any means, relocate to Spotify for login.
			window.location.href = getSpotifyAuthUrl([
				"streaming",
				"user-read-email",
				"user-read-private",
				"user-library-read",
				"user-library-modify",
				"user-read-playback-state",
				"user-modify-playback-state",
			]);
		})();
	}, [refreshToken, expiresIn, authCode]);

	return (
		<SpotifyAuthContext.Provider value={{ accessToken }}>
			{children}
		</SpotifyAuthContext.Provider>
	);
}

export { SpotifyAuthContext, SpotifyAuthProvider };
