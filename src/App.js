import { useState } from "react";
import "./App.css";

import UserAuth from "./layout/userAuth/UserAuth";
import SpotLite from "./layout/spotLite/SpotLite";

function App() {
	const [user, setUser] = useState(null);

	return (
		<div className="app-container">
			{user == null ? (
				<UserAuth user={user} setUser={setUser} />
			) : (
				<SpotLite user={user} setUser={setUser} />
			)}
		</div>
	);
}

export default App;
