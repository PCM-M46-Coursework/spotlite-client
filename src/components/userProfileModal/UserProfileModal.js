import "./UserProfileModal.css";
import Menu from "./parts/Menu";
import { UserProfileContext } from "./context/UserProfileContext";
import { useContext } from "react";

export default function UserProfileModal({ isUserProfileModalOpen, setIsUserProfileModalOpen }) {
	const { page } = useContext(UserProfileContext);

	function closeForm() {
		setIsUserProfileModalOpen(false);
	}

	return (
		<div className="user-profile-container" open={isUserProfileModalOpen}>
			<dialog className="user-profile" open={isUserProfileModalOpen}>
				<div className="sideMenu">
					<Menu />
				</div>
				<div className="mainPanel">
					<div className="pageContents">{page}</div>
					<p className="btn-close" onClick={closeForm}>
						❌
					</p>
				</div>
			</dialog>
		</div>
	);
}
