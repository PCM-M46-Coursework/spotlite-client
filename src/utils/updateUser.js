import authCheck from "./authCheck";
import getCookie from "./getCookie";

export default async function updateUser(username, key, value, setUser) {
	try {
		console.log(1);
		const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME);
		console.log(2);
		const requestBody = JSON.stringify({ username, key, value });
		console.log("Request Body:", requestBody);
		const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/update`, {
			method: "PATCH",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
			},
			body: requestBody,
		});
		if (!response.status === 201) return;
		authCheck(jwtToken, setUser);
	} catch (error) {
		console.log(`Update User Error: ${error.message}`);
	}
}
