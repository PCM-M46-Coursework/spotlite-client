import "./Logout.css";
import logout from "../../utils/logout";

export default function Logout({ setUser }) {
	function logoutUser() {
		logout(setUser);
	}

	return (
		<button onClick={logoutUser} className="btn-logout">
			Logout
		</button>
	);
}
