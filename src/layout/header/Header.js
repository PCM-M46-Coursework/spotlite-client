import "./Header.css";
import imgLogo from "./images/logo.png";

import Logout from "../../components/logout/Logout.js";
import SearchBar from "../../components/searchBar/SearchBar";
import UserProfile from "../../components/userProfile/UserProfile";
import { useState } from "react";

export default function Header({ user, setUser }) {
	const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

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
					<span
						className="profile-link"
						onClick={() => setIsUserProfileModalOpen(true)}
					>
						{user.username}
					</span>
					!
				</p>
				<UserProfile
					user={user}
					setUser={setUser}
					isUserProfileModalOpen={isUserProfileModalOpen}
					setIsUserProfileModalOpen={setIsUserProfileModalOpen}
				/>
				<Logout setUser={setUser} />
			</section>
		</header>
	);
}
