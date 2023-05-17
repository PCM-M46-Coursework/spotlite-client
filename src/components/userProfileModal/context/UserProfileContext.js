import { createContext, useEffect, useState } from "react";
import UserProfile from "../parts/UserProfile";
import EditDetails from "../parts/EditDetails";
import ChangePassword from "../parts/ChangePassword";
import DeleteAccount from "../parts/DeleteAccount";
import ProfilePicture from "../parts/ProfilePicture";

const UserProfileContext = createContext();

function UserProfileProvider({ children, user, setUser }) {
	const [selectedItem, setSelectedItem] = useState("userProfile");
	const [page, setPage] = useState(<></>);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (!user || !selectedItem) return;
		renderPage(selectedItem);
	}, [user]);

	function renderPage(id) {
		setSelectedItem(id);
		switch (id) {
			case "editDetails":
				setPage(<EditDetails user={user} setUser={setUser} />);
				break;
			case "changePassword":
				setPage(<ChangePassword user={user} setUser={setUser} />);
				break;
			case "profilePic":
				setPage(<ProfilePicture user={user} setUser={setUser} />);
				break;
			case "deleteAccount":
				setPage(<DeleteAccount user={user} setUser={setUser} />);
				break;
			case "userProfile":
			default:
				setPage(<UserProfile user={user} />);
				break;
		}
	}

	return (
		<UserProfileContext.Provider value={{ page, renderPage, selectedItem, message, setMessage }}>
			{children}
		</UserProfileContext.Provider>
	);
}

export { UserProfileContext, UserProfileProvider };
