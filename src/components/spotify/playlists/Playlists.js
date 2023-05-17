import React, { useContext, useEffect, useState } from "react";
import { TrackSearchContext } from "../../../context/trackSearchContext/TrackSearchContext";
import { SpotifyAuthContext } from "../../../context/spotifyAuthContext/SpotifyAuthContext";
import SpotifyWebApi from "spotify-web-api-node";
import PlaylistResultsMap from "./parts/playlistResultsMap/PlaylistResultsMap";
import { SpotifyPlaylistProvider } from "./context/SpotifyPlaylistContext";
import TrackResultsMap from "./parts/trackResultsMap/TrackResultsMap";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function Playlists() {
	const [playlistResults, setPlaylistResults] = useState([]);
	const { trackSearchTerm } = useContext(TrackSearchContext);
	const { accessToken } = useContext(SpotifyAuthContext);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!accessToken) return;
		(async function getPlaylists() {
			const response = await spotifyApi.getUserPlaylists();
			const playlists = response.body.items.map(playlist => {
				return {
					id: playlist.id,
					title: playlist.name,
					description: playlist.description,
					imageUrl: playlist.images[0]?.url, // (Needs default image)
					totalTracks: playlist.tracks.total,
				};
			});
			const filteredPlaylists = playlists.filter(playlist => {
				const playlistTitle = playlist.title.toLowerCase();
				const searchTerm = trackSearchTerm.toLowerCase();
				return playlistTitle.includes(searchTerm);
			});
			setPlaylistResults(filteredPlaylists);
		})();
	}, [accessToken, trackSearchTerm]);

	return (
		<div>
			<SpotifyPlaylistProvider>
				<PlaylistResultsMap spotifyApi={spotifyApi} playlistResults={playlistResults} />
				<TrackResultsMap />
			</SpotifyPlaylistProvider>
		</div>
	);
}
