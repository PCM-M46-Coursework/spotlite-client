import React, { useContext } from "react";
import { TrackSearchContext } from "../../context/trackSearchContext/TrackSearchContext";

export default function ContentPanel() {
	const { trackSearchTerm, setCurrentTrack } = useContext(TrackSearchContext);

	function doStuff() {
		setCurrentTrack(trackSearchTerm);
	}

	return <div onClick={doStuff}>{trackSearchTerm}</div>;
}
