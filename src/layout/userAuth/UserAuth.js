import { useState } from "react";
import "./UserAuth.css";

import Register from "../../components/register/Register.js";

export default function UserAuth({ user, setUser }) {
	const [authAction, setAuthAction] = useState("register");

	return (
		<div>
			{authAction == "login" ? (
				<p>Login</p>
			) : (
				<Register setAuthAction={setAuthAction} />
			)}
		</div>
	);
}
