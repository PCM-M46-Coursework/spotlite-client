import React, { useContext, useEffect } from "react";
import { TrackSearchContext } from "../../context/trackSearchContext/TrackSearchContext";

export default function Footer() {
	const { currentTrack } = useContext(TrackSearchContext);

	useEffect(() => console.log(currentTrack), [currentTrack]);

	return <div>{currentTrack}</div>;
}
