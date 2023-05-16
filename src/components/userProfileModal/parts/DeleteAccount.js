import { useState } from "react";
import { deleteUser, logout } from "../../../utils";

export default function DeleteAccount({ user, setUser }) {
	const [confirmDeletion, setConfirmDeletion] = useState(false);

	const handleCheckboxChange = e => {
		setConfirmDeletion(e.target.checked);
	};

	const deleteAccount = () => {
		if (!confirmDeletion) return;
		deleteUser(user).then(() => {
			logout(setUser);
		});
	};

	return (
		<>
			<h2 className="page-title">Delete Account</h2>

			<div className="form-row">
				<label htmlFor="checkBox">Are you sure?</label>
				<input type="checkbox" id="checkBox" checked={confirmDeletion} onChange={handleCheckboxChange} />
				<button className="pushRight" disabled={!confirmDeletion} onClick={deleteAccount}>
					Delete Account
				</button>
			</div>
		</>
	);
}
