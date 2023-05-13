export default function writeCookie(cookieName, value, days) {
	let date = new Date();
	date.setDate(
		date.getDate() + (days || parseInt(process.env.REACT_APP_COOKIE_TTL)),
	);

	const existingCookies = document.cookie;
	const newCookie = `${cookieName}=${value};expires=${date.toGMTString()};path=/`;

	// Append the new cookie to the existing cookies
	document.cookie = existingCookies
		? `${existingCookies}; ${newCookie}`
		: newCookie;

	return newCookie;
}
