import React, { useContext, useEffect, useState } from "react";
import { TrackSearchContext } from "../../../context/trackSearchContext/TrackSearchContext";
import { SpotifyAuthContext } from "../../../context/spotifyAuthContext/SpotifyAuthContext";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyTrackSearchResult from "../parts/spotifyTrackSearchResult/SpotifyTrackSearchResult";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function SearchByTrack() {
	const [searchResults, setSearchResults] = useState([]);
	const { trackSearchTerm, setCurrentTrack } = useContext(TrackSearchContext);
	const { accessToken } = useContext(SpotifyAuthContext);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!accessToken || !trackSearchTerm) return setSearchResults([]);
		let cancel = false;

		spotifyApi.searchTracks(trackSearchTerm).then(res => {
			if (cancel) return;
			console.log(res);
			// Reference for `map()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
			// Reference for `reduce()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
			const results = res.body.tracks.items.map(track => {
				const smallestImage = track.album.images.reduce((smallest, image) => {
					if (image.height < smallest.height) return image;
					return smallest;
				});
				return {
					artist: track.artists[0].name,
					title: track.name,
					uri: track.uri,
					albumUrl: smallestImage.url,
				};
			});
			console.log(results);
			setSearchResults(results);
		});
		return () => (cancel = true);
	}, [accessToken, trackSearchTerm]);

	function chooseTrack(track) {
		// Format: uri = "spotify:track:nukfhiwehfkuwfwkf"
		const trackId = track.uri.replace("spotify:track:", "");
		setCurrentTrack(trackId);
	}

	return (
		<div>
			<h3>Search Results</h3>
			{searchResults.length > 0 ? (
				<>
					{searchResults.map(track => (
						<SpotifyTrackSearchResult key={track.uri} track={track} chooseTrack={chooseTrack} />
					))}
				</>
			) : (
				<p className="block-margin">
					{`${trackSearchTerm.length > 0 
                        ? "No results found." 
                        : "Search for music to play."}
                    `}
				</p>
			)}
		</div>
	);
}
