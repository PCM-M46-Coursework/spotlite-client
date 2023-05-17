import { createContext, useEffect, useState } from "react";

const SpotifyArtistContext = createContext();

function SpotifyArtistProvider({ children }) {
	const [selectedArtist, setSelectedArtist] = useState({});
	const [selectedArtistTracks, setSelectedArtistTracks] = useState([]);

	useEffect(() => {
		if (!selectedArtist) return;
	}, [selectedArtist]);

	return (
		<SpotifyArtistContext.Provider
			value={{ selectedArtist, setSelectedArtist, selectedArtistTracks, setSelectedArtistTracks }}
		>
			{children}
		</SpotifyArtistContext.Provider>
	);
}

export { SpotifyArtistContext, SpotifyArtistProvider };
