import React, { useContext, useRef, useState } from "react";
import { updateUser } from "../../../utils";
import { UserProfileContext } from "../context/UserProfileContext";

export default function EditDetails({ user, setUser }) {
	const { renderPage, message, setMessage } = useContext(UserProfileContext);
	const username = useRef();
	const email = useRef();
	const biography = useRef();

	function Popup({ message, onClose }) {
		return (
			<div className="popup">
				<div className="popup-message">
					<p>{message}</p>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		);
	}

	function editUsername() {
		updateUser(user.username, "username", username.current.value, setUser).then(() => {
			setMessage("Username updated successfully");
			renderPage("userProfile");
		});
	}

	function editEmail() {
		updateUser(user.username, "email", email.current.value, setUser).then(() => {
			setMessage("Email updated successfully");
			renderPage("userProfile");
		});
	}

	function editBiography() {
		updateUser(user.username, "biography", biography.current.value, setUser).then(() => {
			setMessage("Biography updated successfully");
			renderPage("userProfile");
		});
	}

	return (
		<>
			<h2 className="page-title">Edit Details</h2>

			<div className="form-row">
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" ref={username} placeholder="Username" defaultValue={user.username} />
				<button className="pushRight" onClick={editUsername}>
					Edit Username
				</button>
			</div>
			<div className="form-row">
				<label htmlFor="email">Email:</label>
				<input type="text" id="email" ref={email} placeholder="Email Address" defaultValue={user.email} />
				<button className="pushRight" onClick={editEmail}>
					Edit Email
				</button>
			</div>
			<div className="form-row">
				<label htmlFor="biography">Biography:</label>
				<input type="text" id="biography" ref={biography} placeholder="Biography" defaultValue={user.biography} />
				<button className="pushRight" onClick={editBiography}>
					Edit Biography
				</button>
			</div>

	</>
	);
}

