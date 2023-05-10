export default function writeCookie(key, value, days) {
	let date = new Date();
	date.setDate(date.getDate() + (days || 7));
	let cookie =
		(document.cookie = `${key}=${value}; expires=${date.toGMTString()};path=/`);
	return cookie;
}
