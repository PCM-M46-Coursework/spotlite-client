import "./Header.css";
import imgLogo from "./images/logo.png";

import Logout from "../../components/logout/Logout.js";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Header({ user, setUser }) {
	function showUserProfile() {
		console.log("User Profile modal form not implemented.");
	}

	return (
		<header className="header-container">
			<section className="branding">
				<img src={imgLogo} alt="SpotLite" title="SpotLite" />
				<h1>SpotLite</h1>
			</section>
			<section className="search">
				<SearchBar />
			</section>
			<section className="account">
				<p>
					Welcome,{" "}
					<span className="profile-link" onClick={showUserProfile}>
						{user.username}
					</span>
					!
				</p>
				<Logout setUser={setUser} />
			</section>
		</header>
	);
}
