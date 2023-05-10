export default async function registerUser(username, email, password, setUser) {
	try {
		const response = await fetch("http://localhost:5001/users/register", {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, email, password }),
		});
		const json = await response.json();
		setUser(json.user);
	} catch (error) {
		console.log(`Registraion Error: ${error.message}`);
	}
}
