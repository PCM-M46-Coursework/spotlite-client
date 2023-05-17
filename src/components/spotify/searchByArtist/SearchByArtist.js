import React, { useContext, useEffect, useState } from "react";
import { TrackSearchContext } from "../../../context/trackSearchContext/TrackSearchContext";
import { SpotifyAuthContext } from "../../../context/spotifyAuthContext/SpotifyAuthContext";
import SpotifyWebApi from "spotify-web-api-node";
import ArtistResultsMap from "./parts/artistResultsMap/ArtistResultsMap";
import { SpotifyArtistProvider } from "./context/SpotifyArtistContext";
import TrackResultsMap from "./parts/trackResultsMap/TrackResultsMap";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function SearchByArtist() {
	const [artistResults, setArtistResults] = useState([]);
	const { trackSearchTerm } = useContext(TrackSearchContext);
	const { accessToken } = useContext(SpotifyAuthContext);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!accessToken || !trackSearchTerm) return;
		(async function getArtists() {
			const response = await spotifyApi.searchArtists(trackSearchTerm);
			console.log(response.body.artists.items);
			const artists = response.body.artists.items.map(artist => {
				return {
					id: artist.id,
					name: artist.name,
					genres: artist.genres.join(", "),
					imageUrl: artist.images[0]?.url,
				};
			});
			setArtistResults(artists);
		})();
	}, [accessToken, trackSearchTerm]);

	return (
		<div>
			<h3>Search by Artist</h3>
			{trackSearchTerm.length > 0 ? (
				<SpotifyArtistProvider>
					<ArtistResultsMap spotifyApi={spotifyApi} artistResults={artistResults} />
					<TrackResultsMap />
				</SpotifyArtistProvider>
			) : (
				<p className="block-margin">Search for music to play.</p>
			)}
		</div>
	);
}
