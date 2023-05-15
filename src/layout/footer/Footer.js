import React, { useContext, useEffect } from "react";
import { TrackSearchContext } from "../../context/trackSearchContext/TrackSearchContext";

export default function Footer() {
	const { currentTrack } = useContext(TrackSearchContext);
	return (
		<div id="embed-iframe">
			{currentTrack && (
				<iframe
					title="Spotify Player"
					frameBorder="0"
					src={`https://open.spotify.com/embed/track/${currentTrack}?utm_source=generator&theme=0`}
					width="100%"
					height="152"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			)}
		</div>
	);
}
