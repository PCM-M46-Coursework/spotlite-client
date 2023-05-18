import React from "react";
import ProfilePic from "../../profilePic/ProfilePic";
import "./UserCard.css";

export default function UserCard({ user, isAdmin }) {
	return (
		<article className="user-card">
			<p className="username">{user.username}</p>
			<p className="profilePic">
				<ProfilePic user={user} location={"card"} />
			</p>
			{isAdmin && <p className="email">{user.email}</p>}
			<p className="biography">{user.biography}</p>
		</article>
	);
}
