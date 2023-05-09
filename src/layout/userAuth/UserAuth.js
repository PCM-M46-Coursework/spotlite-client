import { useState } from "react";
import "./UserAuth.css";

export default function UserAuth({ user, setUser }) {
	const [mode, setMode] = useState("login");

	return (
		<div>
			{mode === "login"
				? {/* Login Component */}
				: {/* Register Component */}
            }
		</div>
	);
}
