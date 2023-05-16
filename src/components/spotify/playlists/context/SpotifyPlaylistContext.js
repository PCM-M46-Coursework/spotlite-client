import { createContext, useEffect, useState } from "react";

const SpotifyPlaylistContext = createContext();

function SpotifyPlaylistProvider({ children }) {
	const [selectedPlaylist, setSelectedPlaylist] = useState({});
	const [selectedPlaylistTracks, setSelectedPlaylistTracks] = useState([]);

	useEffect(() => {
		if (!selectedPlaylist) return;
	}, [selectedPlaylist]);

	return (
		<SpotifyPlaylistContext.Provider
			value={{ selectedPlaylist, setSelectedPlaylist, selectedPlaylistTracks, setSelectedPlaylistTracks }}
		>
			{children}
		</SpotifyPlaylistContext.Provider>
	);
}

export { SpotifyPlaylistContext, SpotifyPlaylistProvider };
