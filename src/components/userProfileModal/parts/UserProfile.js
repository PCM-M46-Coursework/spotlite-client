import React from "react";
import Biography from "./Biography";

export default function UserProfile({ user }) {
	return (
		<>
			<h2 className="page-title">User Profile</h2>

			<div className="user-profile-item">
				<span className="user-profile-label">Username:</span>
				<span className="user-profile-value">{user.username}</span>
			</div>
			<div className="user-profile-item">
				<span className="user-profile-label">Email:</span>
				<span className="user-profile-value">{user.email}</span>
			</div>
			<Biography user={user}/>
			
		</>
	);
}
