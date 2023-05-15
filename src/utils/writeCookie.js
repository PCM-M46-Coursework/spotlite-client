export default function writeCookie(key, value, days) {
	let date = new Date();
	date.setDate(
		date.getDate() + (days || parseInt(process.env.REACT_APP_COOKIE_TTL)),
	);
	let cookie =
		(document.cookie = `${key}=${value};expires=${date.toGMTString()};path=/`);
	return cookie;
}
