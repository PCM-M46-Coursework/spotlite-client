import "./SpotifyTrackSearchResult.css";

export default function SpotifyTrackSearchResult({ track, chooseTrack }) {
	return (
		<div className="track-search-result" onClick={() => chooseTrack(track)}>
			<img
				src={track.albumUrl}
				alt={`${track.artist} - ${track.title}`}
				title={`${track.artist} - ${track.title}`}
				style={{ height: "64px", width: "64px" }}
			/>
			<div className="track-info">
				<div>{track.title}</div>
				<div className="text-muted">{track.artist}</div>
			</div>
		</div>
	);
}
