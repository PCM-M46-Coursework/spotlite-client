import writeCookie from "./writeCookie";

export default async function authCheck(jwtToken, setUser) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/users/auth-check`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
				},
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
		console.log(`Auth Check Error: ${error.message}`);
	}
}
