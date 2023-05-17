import React, { useContext } from "react";
import "./PlaylistResultsMap.css";
import PlaylistCard from "../playlistCard/PlaylistCard";
import { SpotifyPlaylistContext } from "../../context/SpotifyPlaylistContext";

export default function PlaylistResultsMap({ spotifyApi, playlistResults }) {
	const { setSelectedPlaylistTracks, setSelectedPlaylist } = useContext(SpotifyPlaylistContext);

	async function getTracks(playlist) {
		let cancel = false;

		setSelectedPlaylist(playlist);
		spotifyApi.getPlaylistTracks(playlist.id).then(res => {
			if (cancel) return;
			console.log(res);
			// Reference for `map()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
			// Reference for `reduce()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
			const results = res.body.items.map(item => {
				const smallestImage = item.track.album.images.reduce((smallest, image) => {
					if (image.height < smallest.height) return image;
					return smallest;
				});
				return {
					artist: item.track.artists[0].name,
					title: item.track.name,
					uri: item.track.uri,
					albumUrl: smallestImage.url,
				};
			});
			console.log(results);
			setSelectedPlaylistTracks(results);
		});
		return () => (cancel = true);
	}
	return (
		<>
			<h3>Playlists</h3>
			<div className="playlist-results-container">
				{playlistResults.length > 0 ? (
					playlistResults.map(p => <PlaylistCard key={p.id} playlist={p} getTracks={getTracks} />)
				) : (
					<p>No playlists found.</p>
				)}
			</div>
		</>
	);
}
