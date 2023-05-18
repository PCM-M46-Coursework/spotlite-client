import "./ArtistCard.css";

export default function ArtistCard({ artist, getTracks }) {
	return (
		<article className="spotify-artist-card" onClick={() => getTracks(artist)}>
			<header>
				<p>{artist.name}</p>
			</header>
			<main>
				<img src={artist.imageUrl} alt={artist.name} title={artist.name} />
			</main>
			<footer>
				<p>{artist.genres}</p>
			</footer>
		</article>
	);
}
