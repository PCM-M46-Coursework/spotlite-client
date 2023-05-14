import { getCookie } from "../../../utils";

export default async function refreshSpotifyTokens(refreshToken) {
	try {
		console.log("Refreshing the access token.");
		const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME);
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/spotify/refresh`,
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
				},
				body: JSON.stringify({ refreshToken }),
			},
		);
		return await response.json();
	} catch (error) {
		console.log(`Spotify Refresh Error: ${error.message}`);
	}
}
