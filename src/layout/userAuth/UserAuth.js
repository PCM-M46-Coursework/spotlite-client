import { useState } from "react";
import "./UserAuth.css";

import Register from "../../components/register/Register.js";
import Login from "../../components/login/Login.js";

export default function UserAuth({ user, setUser }) {
	const [authAction, setAuthAction] = useState("register");

	return (
		<div>
			{authAction == "login" ? (
				<Login setUser={setUser} setAuthAction={setAuthAction} />
			) : (
				<Register setUser={setUser} setAuthAction={setAuthAction} />
			)}
		</div>
	);
}
