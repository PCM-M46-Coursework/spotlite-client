import writeCookie from "./writeCookie";

export default async function loginUser(username, password, setUser) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/users/login`,
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			},
		);
		const json = await response.json();
		setUser(json.user);
		writeCookie(
			process.env.REACT_APP_COOKIE_NAME,
			json.token,
			parseInt(process.env.REACT_APP_COOKIE_TTL),
		);
	} catch (error) {
		console.log(`Login Error: ${error.message}`);
	}
}
