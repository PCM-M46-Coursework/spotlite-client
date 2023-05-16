import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		{process.env.NODE_ENV === "development" ? (
			<App />
		) : (
			<React.StrictMode>
				<App />
			</React.StrictMode>
		)}
	</>,
);

// Strict Mode:

// When in development mode, Strict Mode will mount, unmount, and then mount again.
// When in production mode, this doesn't happen. It just mounts.
