import React, { useContext, useEffect } from "react";
import { TrackSearchContext } from "../../context/trackSearchContext/TrackSearchContext";
import { SpotifyAuthContext } from "../../context/spotifyAuthContext/SpotifyAuthContext";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function ContentPanel() {
	const { trackSearchTerm, setCurrentTrack } = useContext(TrackSearchContext);
	const { accessToken } = useContext(SpotifyAuthContext);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	async function doStuff() {
		const results = await spotifyApi.searchTracks(trackSearchTerm);
		console.log(results);
	}

	return <div onClick={doStuff}>{trackSearchTerm}</div>;
}
