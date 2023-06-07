import { useContext } from "react";
import "./SpotifyTrackSearchResult.css";
import { SidebarMenuContext } from "../../../../context/sidebarMenuContext/SidebarMenuContext";
import { authCheck, getCookie } from "../../../../utils";

export default function SpotifyTrackSearchResult({ track, chooseTrack, favourites }) {
	const { setUser, navigateTo } = useContext(SidebarMenuContext);
	const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME);

	async function addFavourite() {
		console.log("Add");
		try {
			const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/add-favourite-track`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
				},
				body: JSON.stringify({ track }),
			});
			const json = await response.json();
			if (!response.status === 201) return;
			authCheck(jwtToken, setUser);
			navigateTo("favouriteTracks");
			return json;
		} catch (error) {
			console.log(`Add Favourite Track Error: ${error.message}`);
		}
	}

	async function removeFavourite() {
		console.log("Remove");
		try {
			const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/remove-favourite-track`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
				},
				body: JSON.stringify({ track }),
			});
			const json = await response.json();
			if (!response.status === 201) return;
			authCheck(jwtToken, setUser);
			return json;
		} catch (error) {
			console.log(`Remove Favourite Track Error: ${error.message}`);
		}
	}

	function handleFavouriteClick(e) {
		e.stopPropagation();
		favourites ? removeFavourite() : addFavourite();
	}

	return (
		<div className="track-search-result" onClick={() => chooseTrack(track)}>
			<p
				className={`track-favourites-${favourites}`}
				title={`${favourites ? "Remove from" : "Add to"} Favourites`}
				onClick={e => handleFavouriteClick(e)}
			>
				★
			</p>
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
