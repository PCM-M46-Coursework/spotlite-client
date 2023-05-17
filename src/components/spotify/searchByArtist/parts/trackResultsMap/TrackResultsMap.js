import React, { useContext } from "react";
import { SpotifyArtistContext } from "../../context/SpotifyArtistContext";
import { TrackSearchContext } from "../../../../../context/trackSearchContext/TrackSearchContext";
import SpotifyTrackSearchResult from "../../../parts/spotifyTrackSearchResult/SpotifyTrackSearchResult";

export default function TrackResultsMap() {
	const { setCurrentTrack } = useContext(TrackSearchContext);
	const { selectedArtist, selectedArtistTracks } = useContext(SpotifyArtistContext);

	function chooseTrack(track) {
		// Format: uri = "spotify:track:nukfhiwehfkuwfwkf"
		const trackId = track.uri.replace("spotify:track:", "");
		setCurrentTrack(trackId);
	}

	return (
		<div>
			{selectedArtistTracks.length > 0 && (
				<>
					<h3>{selectedArtist.name}</h3>
					{selectedArtistTracks.map(track => (
						<SpotifyTrackSearchResult key={track.uri} track={track} chooseTrack={chooseTrack} />
					))}
				</>
			)}
		</div>
	);
}
