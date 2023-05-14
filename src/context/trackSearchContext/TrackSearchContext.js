import { createContext, useState } from "react";

const TrackSearchContext = createContext();

function TrackSearchProvider({ children }) {
	const [trackSearchTerm, setTrackSearchTerm] = useState("");
	const [currentTrack, setCurrentTrack] = useState("");

	return (
		<TrackSearchContext.Provider
			value={{
				trackSearchTerm,
				setTrackSearchTerm,
				currentTrack,
				setCurrentTrack,
			}}
		>
			{children}
		</TrackSearchContext.Provider>
	);
}

export { TrackSearchContext, TrackSearchProvider };
