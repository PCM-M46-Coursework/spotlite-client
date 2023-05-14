export default async function refreshSpotifyTokens(refreshToken) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/spotify/refresh`,
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ refreshToken }),
			},
		);
		return await response.json();
	} catch (error) {
		console.log(`Spotify Refresh Error: ${error.message}`);
	}
}
