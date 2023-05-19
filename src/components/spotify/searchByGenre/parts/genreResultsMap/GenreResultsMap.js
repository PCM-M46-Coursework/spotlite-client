import React, { useContext } from "react";
import "./GenreResultsMap.css";
import GenreCard from "../genreCard/GenreCard";
import { SpotifyGenreContext } from "../../context/SpotifyGenreContext";

export default function GenreResultsMap({ spotifyApi, genreResults }) {
	const { setSelectedGenreTracks, setSelectedGenre } = useContext(SpotifyGenreContext);

	async function getTracks(genre) {
		let cancel = false;

		setSelectedGenre(genre);
		spotifyApi.getPlaylist(genre.id).then(res => {
			if (cancel) return null;
			console.log(res.body.tracks.items);
			const results = res.body.tracks.items
				.filter(p => p.track != null)
				.map(item => {
					const smallestImage = item.track.album.images.reduce((smallest, image) => {
						if (image.height < smallest.height) return image;
						return smallest;
					});
					return {
						title: item.track.name,
						uri: item.track.uri,
						artist: item.track.artists[0].name,
						albumUrl: smallestImage.url,
					};
				});
			console.log(results);
			setSelectedGenreTracks(results);
		});
		return () => (cancel = true);
	}
	return (
		<div className="genre-results-container">
			{genreResults.length > 0 ? (
				genreResults.map(p => <GenreCard key={p.id} genre={p} getTracks={getTracks} />)
			) : (
				<p className="block-margin">No genres found.</p>
			)}
		</div>
	);
}
