import "./Header.css";
import imgLogo from "./images/logo.png";

import Logout from "../../components/logout/Logout.js";
import SearchBar from "../../components/searchBar/SearchBar";
import UserProfileModal from "../../components/userProfileModal/UserProfileModal";
import { useState } from "react";
import { UserProfileProvider } from "../../components/userProfileModal/context/UserProfileContext";
import ProfilePic from "../../components/profilePic/ProfilePic";

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
					<span className="profile-link" onClick={() => setIsUserProfileModalOpen(true)}>
						{user.username}
					</span>
					!
				</p>
				<ProfilePic user={user} location={"header"} />
				<UserProfileProvider user={user} setUser={setUser}>
					<UserProfileModal
						isUserProfileModalOpen={isUserProfileModalOpen}
						setIsUserProfileModalOpen={setIsUserProfileModalOpen}
					/>
				</UserProfileProvider>
				<Logout setUser={setUser} />
			</section>
		</header>
	);
}
