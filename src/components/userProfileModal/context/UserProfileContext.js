import { createContext, useEffect, useState } from "react";
import UserProfile from "../parts/UserProfile";
import EditDetails from "../parts/EditDetails";
import ChangePassword from "../parts/ChangePassword";
import DeleteAccount from "../parts/DeleteAccount";

const UserProfileContext = createContext();

function UserProfileProvider({ children, user, setUser }) {
	const [selectedItem, setSelectedItem] = useState("userProfile");
	const [page, setPage] = useState(<></>);

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
		<UserProfileContext.Provider value={{ page, renderPage, selectedItem }}>{children}</UserProfileContext.Provider>
	);
}

export { UserProfileContext, UserProfileProvider };
