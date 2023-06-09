import "./PlaylistCard.css";

export default function PlaylistCard({ playlist, getTracks }) {
	return (
		<article className="spotify-playlist-card" onClick={() => getTracks(playlist)}>
			<header>
				<p>{playlist.title}</p>
			</header>
			<main>
				<img src={playlist.imageUrl} alt={playlist.name} title={playlist.name} />
			</main>
			<footer>
				<p>{playlist.description}</p>
			</footer>
		</article>
	);
}
