import React, { useContext, useEffect, useState } from "react";
import { TrackSearchContext } from "../../../context/trackSearchContext/TrackSearchContext";
import { SpotifyAuthContext } from "../../../context/spotifyAuthContext/SpotifyAuthContext";
import SpotifyWebApi from "spotify-web-api-node";
import GenreResultsMap from "./parts/genreResultsMap/GenreResultsMap";
import { SpotifyGenreProvider } from "./context/SpotifyGenreContext";
import TrackResultsMap from "./parts/trackResultsMap/TrackResultsMap";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function SearchByGenre() {
	const [genreResults, setGenreResults] = useState([]);
	const { trackSearchTerm } = useContext(TrackSearchContext);
	const { accessToken } = useContext(SpotifyAuthContext);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!accessToken || !trackSearchTerm) return;
		(async function getGenres() {
			const response = await spotifyApi.searchPlaylists(trackSearchTerm);
			console.log(response.body.playlists);
			const genres = response.body.playlists.items.map(playlist => {
				return {
					id: playlist.id,
					name: playlist.name,
					description: playlist.description,
					imageUrl: playlist.images[0]?.url,
				};
			});
			setGenreResults(genres);
		})();
	}, [accessToken, trackSearchTerm]);

	return (
		<div>
			<h3>Search by Genre</h3>
			{trackSearchTerm.length > 0 ? (
				<SpotifyGenreProvider>
					<GenreResultsMap spotifyApi={spotifyApi} genreResults={genreResults} />
					<TrackResultsMap />
				</SpotifyGenreProvider>
			) : (
				<p className="block-margin">Search for music to play.</p>
			)}
		</div>
	);
}
