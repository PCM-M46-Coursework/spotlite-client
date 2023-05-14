export default function getSpotifyAuthUrl(scopes) {
	const queryString = new URLSearchParams({
		client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
		response_type: "code",
		redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URL,
		scope: scopes.join("%20"), // %20 is equal to a SPACE, when encoded.
	});

	const url = `https://accounts.spotify.com/authorize?${queryString}`;
	console.log(url);
	return url;
}
