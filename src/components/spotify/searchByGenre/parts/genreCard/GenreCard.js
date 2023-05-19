import "./GenreCard.css";

export default function GenreCard({ genre, getTracks }) {
	return (
		<article className="spotify-genre-card" onClick={() => getTracks(genre)}>
			<header>
				<p>{genre.name}</p>
			</header>
			<main>
				<img src={genre.imageUrl} alt={genre.name} title={genre.name} />
			</main>
			<footer>{genre.description}</footer>
		</article>
	);
}
