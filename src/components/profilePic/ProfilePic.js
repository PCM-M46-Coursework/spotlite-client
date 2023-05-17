import profilePicSrc from "./profilePic.png";
import "./ProfilePic.css";

export default function ProfilePic({ user, location }) {
	function handleOnClick() {
		console.log(user.profilePic);
	}
	return (
		<img
			className={`profile-image-${location}`}
			src={user.profilePic == null ? profilePicSrc : `data:image/png;base64, ${user.profilePic}`}
			alt="Profile Pic"
			title={user.username}
			onClick={handleOnClick}
		/>
	);
}
