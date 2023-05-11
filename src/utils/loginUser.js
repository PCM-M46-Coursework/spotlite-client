import writeCookie from "./writeCookie";

export default async function loginUser(username, password, setUser) {
	try {
		const response = await fetch("http://localhost:5001/users/login", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		const json = await response.json();
		setUser(json.user);
		writeCookie("jwt_token", json.token, 7);
	} catch (error) {
		console.log(`Login Error: ${error.message}`);
	}
}
