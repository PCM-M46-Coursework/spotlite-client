export default async function getSpotifyTokens(code) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/spotify/login`,
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ code }),
			},
		);
		return await response.json();
	} catch (error) {
		console.log(`Spotify Login Error: ${error.message}`);
	}
}
