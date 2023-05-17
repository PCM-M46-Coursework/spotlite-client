import { createContext, useEffect, useState } from "react";

const SpotifyGenreContext = createContext();

function SpotifyGenreProvider({ children }) {
	const [selectedGenre, setSelectedGenre] = useState({});
	const [selectedGenreTracks, setSelectedGenreTracks] = useState([]);

	useEffect(() => {
		if (!selectedGenre) return;
	}, [selectedGenre]);

	return (
		<SpotifyGenreContext.Provider
			value={{ selectedGenre, setSelectedGenre, selectedGenreTracks, setSelectedGenreTracks }}
		>
			{children}
		</SpotifyGenreContext.Provider>
	);
}

export { SpotifyGenreContext, SpotifyGenreProvider };
