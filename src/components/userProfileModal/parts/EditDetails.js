import React, { useContext, useRef } from "react";
import { updateUser } from "../../../utils";
import { UserProfileContext } from "../context/UserProfileContext";

export default function EditDetails({ user, setUser }) {
	const { renderPage } = useContext(UserProfileContext);
	const username = useRef();
	const email = useRef();

	function editUsername() {
		updateUser(user.username, "username", username.current.value, setUser).then(() => {
			renderPage("userProfile");
		});
	}

	function editEmail() {
		updateUser(user.username, "email", email.current.value, setUser).then(() => {
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
		</>
	);
}
