import { useRef } from "react";
import { changePassword, logout } from "../../../utils";

export default function ChangePassword({ user, setUser }) {
	const currentPasswordRef = useRef();
	const newPasswordRef = useRef();
	const confirmPasswordRef = useRef();

	const handleFormSubmit = e => {
		e.preventDefault();
		const currentPassword = currentPasswordRef.current.value;
		const newPassword = newPasswordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (newPassword !== confirmPassword) return;

		changePassword(user.username, currentPassword, newPassword).then(() => {
			logout(setUser);
		});
	};

	return (
		<>
			<h2 className="page-title">Change Password</h2>

			<form onSubmit={handleFormSubmit}>
				<div className="form-row">
					<label htmlFor="currentPassword">Current Password:</label>
					<input type="password" id="currentPassword" ref={currentPasswordRef} />
				</div>
				<div className="form-row">
					<label htmlFor="newPassword">New Password:</label>
					<input type="password" id="newPassword" ref={newPasswordRef} />
				</div>
				<div className="form-row">
					<label htmlFor="confirmPassword">Confirm Password:</label>
					<input type="password" id="confirmPassword" ref={confirmPasswordRef} />
				</div>
				<div className="form-row">
					<button className="pushRight" type="submit">
						Change Password
					</button>
				</div>
			</form>
		</>
	);
}
