import { useState, useEffect } from "react";
import { authCheck, getCookie, removeCookie } from "./utils";

import UserAuth from "./layout/userAuth/UserAuth";
import SpotLite from "./layout/spotLite/SpotLite";

import "./App.css";

function App() {
	const [user, setUser] = useState({});

	// eslint-disable-next-line
	useEffect(() => {
		const jwt = getCookie(process.env.REACT_APP_COOKIE_NAME);
		if (jwt === "undefined") {
			removeCookie(process.env.REACT_APP_COOKIE_NAME);
			return;
		}
		(async () => {
			if (jwt != null) await authCheck(jwt, setUser);
		})();
	}, []);

	const component =
		user?.username == null ? (
			<UserAuth user={user} setUser={setUser} />
		) : (
			<SpotLite user={user} setUser={setUser} />
		);

	return <div className="app-container">{component}</div>;
}

export default App;
