import getCookie from "./getCookie";

export default async function changePassword(username, password, newPassword) {
	try {
		const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME);
		await fetch(`${process.env.REACT_APP_BASE_URL}/users/change-password`, {
			method: "PATCH",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
			},
			body: JSON.stringify({ username, password, newPassword }),
		});
	} catch (error) {
		console.log(`Change Password Error: ${error.message}`);
	}
}
