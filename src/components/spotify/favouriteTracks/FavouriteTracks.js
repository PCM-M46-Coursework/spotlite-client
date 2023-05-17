import React, { useContext } from "react";
import { SidebarMenuContext } from "../../../context/sidebarMenuContext/SidebarMenuContext";
import { TrackSearchContext } from "../../../context/trackSearchContext/TrackSearchContext";
import SpotifyTrackSearchResult from "../parts/spotifyTrackSearchResult/SpotifyTrackSearchResult";

export default function FavouriteTracks() {
	const { user } = useContext(SidebarMenuContext);
	const { setCurrentTrack } = useContext(TrackSearchContext);

	function chooseTrack(track) {
		const trackId = track.uri.replace("spotify:track:", "");
		setCurrentTrack(trackId);
	}

	return (
		<>
			<h3>Favourite Tracks</h3>
			{user.favouriteTracks?.length > 0 ? (
				<>
					{user.favouriteTracks.map(track => (
						<SpotifyTrackSearchResult
							key={track.uri}
							track={track}
							chooseTrack={chooseTrack}
							favourites={true}
						/>
					))}
				</>
			) : (
				<p className="block-margin">No tracks have been favourited.</p>
			)}
		</>
	);
}
