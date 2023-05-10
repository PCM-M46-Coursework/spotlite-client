export default async function authCheck(jwtToken, setUser) {
	try {
		const response = await fetch("http://localhost:5001/users/auth-check", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
			},
		});
		const json = await response.json();
		setUser(json.user);
	} catch (error) {
		console.log(`Auth Check Error: ${error.message}`);
	}
}
