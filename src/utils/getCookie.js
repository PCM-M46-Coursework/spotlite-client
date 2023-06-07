export default function getCookie(cookieName) {
	const cookieRegex = new RegExp(`(?<=${cookieName}=)[^;]*`);
	try {
		return document.cookie.match(cookieRegex)[0];
	} catch (error) {
		return null;
	}
}
