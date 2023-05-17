import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../context/UserProfileContext";
import "../UserProfileModal.css";

export default function UserProfile({ user }) {
	const { message, setMessage } = useContext(UserProfileContext);

	useEffect(() => {
		const handleWindowClick = () => {
		  setMessage("");
		};
	
		window.addEventListener("click", handleWindowClick);
	
		return () => {
		  window.removeEventListener("click", handleWindowClick);
		};
	  }, [setMessage]);

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
			<div className="user-profile-item">
				<span className="user-profile-label">Biography:</span>
				<span className="user-profile-value">{user.biography}</span>
			</div>
			{message && 
			<div className="message"
         	style={{
				backgroundColor: "lightgrey",
				color: "black",
				padding: "10px",
				borderRadius: "10px",
				margin: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
          }}>{message}</div>}
			
		</>
	);
}
