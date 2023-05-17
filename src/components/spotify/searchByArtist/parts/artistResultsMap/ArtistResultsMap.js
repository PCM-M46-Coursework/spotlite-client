import React, { useContext } from "react";
import "./ArtistResultsMap.css";
import ArtistCard from "../artistCard/ArtistCard";
import { SpotifyArtistContext } from "../../context/SpotifyArtistContext";

export default function ArtistResultsMap({ spotifyApi, artistResults }) {
	const { setSelectedArtistTracks, setSelectedArtist } = useContext(SpotifyArtistContext);

	async function getTracks(artist) {
		let cancel = false;

		setSelectedArtist(artist);
		spotifyApi.getArtistTopTracks(artist.id, "GB").then(res => {
			if (cancel) return;
			console.log(res);
			const results = res.body.tracks.map(item => {
				const smallestImage = item.album.images.reduce((smallest, image) => {
					if (image.height < smallest.height) return image;
					return smallest;
				});
				return {
					artist: item.artists[0].name,
					title: item.name,
					uri: item.uri,
					albumUrl: smallestImage.url,
				};
			});
			console.log(results);
			setSelectedArtistTracks(results);
		});
		return () => (cancel = true);
	}
	return (
		<div className="artist-results-container">
			{artistResults.length > 0 ? (
				artistResults.map(p => <ArtistCard key={p.id} artist={p} getTracks={getTracks} />)
			) : (
				<p className="block-margin">No artists found.</p>
			)}
		</div>
	);
}
