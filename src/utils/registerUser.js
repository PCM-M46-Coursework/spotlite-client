import writeCookie from "./writeCookie";

export default async function registerUser(username, email, password, setUser) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/users/register`,
			{
				method: "POST",
				mode: "cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, email, password }),
			},
		);
		const json = await response.json();
		setUser(json.user);
		writeCookie(
			process.env.REACT_APP_COOKIE_NAME,
			json.user.token,
			parseInt(process.env.REACT_APP_COOKIE_TTL),
		);
	} catch (error) {
		console.log(`Registration Error: ${error.message}`);
	}
}
