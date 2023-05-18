import React, { useContext } from "react";
import { SpotifyGenreContext } from "../../context/SpotifyGenreContext";
import { TrackSearchContext } from "../../../../../context/trackSearchContext/TrackSearchContext";
import SpotifyTrackSearchResult from "../../../parts/spotifyTrackSearchResult/SpotifyTrackSearchResult";

export default function TrackResultsMap() {
	const { setCurrentTrack } = useContext(TrackSearchContext);
	const { selectedGenre, selectedGenreTracks } = useContext(SpotifyGenreContext);

	function chooseTrack(track) {
		// Format: uri = "spotify:track:nukfhiwehfkuwfwkf"
		const trackId = track.uri.replace("spotify:track:", "");
		setCurrentTrack(trackId);
	}

	return (
		<div>
			{selectedGenreTracks.length > 0 && (
				<>
					<h3>{selectedGenre.name}</h3>
					{selectedGenreTracks.map(track => (
						<SpotifyTrackSearchResult
							key={track.uri}
							track={track}
							chooseTrack={chooseTrack}
							favourites={false}
						/>
					))}
				</>
			)}
		</div>
	);
}
