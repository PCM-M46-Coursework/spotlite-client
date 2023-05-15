import getCookie from "./getCookie";

export default async function deleteUser(user) {
	try {
		const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME);
		await fetch(`${process.env.REACT_APP_BASE_URL}/users/delete`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
			},
			body: JSON.stringify({ username: user.username }),
		});
	} catch (error) {
		console.log(`Delete User Error: ${error.message}`);
	}
}
