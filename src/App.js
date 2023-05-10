import { useState, useEffect } from "react";
import { authCheck, getCookie } from "./utils";
import "./App.css";

import UserAuth from "./layout/userAuth/UserAuth";
import SpotLite from "./layout/spotLite/SpotLite";

function App() {
	const [user, setUser] = useState({});

	// useEffect(async () => {
	// 	const jwt = getCookie("jwt_token");
	// 	if (jwt != null) await authCheck(jwt, setUser);
	// }, []);

	const component =
		user?.username == null ? (
			<UserAuth user={user} setUser={setUser} />
		) : (
			<SpotLite user={user} setUser={setUser} />
		);

	return <div className="app-container">{component}</div>;
}

export default App;
