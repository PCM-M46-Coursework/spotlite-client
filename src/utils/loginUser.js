import writeCookie from "./writeCookie";

export default async function loginUser(username, password, setUser) {
	try {
		const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/login`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		const json = await response.json();
		if (response.status === 401) {
			return { errors:json.errorMessage}
		};
		setUser(json.user);
		writeCookie(process.env.REACT_APP_COOKIE_NAME, json.user.token, parseInt(process.env.REACT_APP_COOKIE_TTL));
	} catch (error) {
		console.log(`Login Error: ${error.message}`);
		return error
	}
}
