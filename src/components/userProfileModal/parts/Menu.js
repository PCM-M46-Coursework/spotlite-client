import { useContext, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { UserProfileContext } from "../context/UserProfileContext";

export default function Menu() {
	const { selectedItem, renderPage } = useContext(UserProfileContext);

	const handleItemClick = id => {
		renderPage(id);
	};

	return (
		<ul>
			<MenuItem
				id="userProfile"
				label="User Profile"
				selected={selectedItem === "userProfile"}
				onClick={handleItemClick}
			/>
			<MenuItem
				id="editDetails"
				label="Edit Details"
				selected={selectedItem === "editDetails"}
				onClick={handleItemClick}
			/>
			<MenuItem
				id="profilePic"
				label="Profile Picture"
				selected={selectedItem === "profilePic"}
				onClick={handleItemClick}
			/>
			<MenuItem
				id="changePassword"
				label="Change Password"
				selected={selectedItem === "changePassword"}
				onClick={handleItemClick}
			/>
			<MenuItem
				id="deleteAccount"
				label="Delete Account"
				selected={selectedItem === "deleteAccount"}
				onClick={handleItemClick}
			/>
		</ul>
	);
}
