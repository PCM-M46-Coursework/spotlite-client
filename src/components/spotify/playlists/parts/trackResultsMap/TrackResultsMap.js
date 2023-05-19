import React, { useContext } from "react";
import { SpotifyPlaylistContext } from "../../context/SpotifyPlaylistContext";
import { TrackSearchContext } from "../../../../../context/trackSearchContext/TrackSearchContext";
import SpotifyTrackSearchResult from "../../../parts/spotifyTrackSearchResult/SpotifyTrackSearchResult";

export default function TrackResultsMap() {
	const { setCurrentTrack } = useContext(TrackSearchContext);
	const { selectedPlaylist, selectedPlaylistTracks } = useContext(SpotifyPlaylistContext);

	function chooseTrack(track) {
		// Format: uri = "spotify:track:nukfhiwehfkuwfwkf"
		const trackId = track.uri.replace("spotify:track:", "");
		setCurrentTrack(trackId);
	}

	return (
		<div>
			{selectedPlaylistTracks.length > 0 && (
				<>
					<h3>{selectedPlaylist.title}</h3>
					{selectedPlaylistTracks.map(track => (
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
