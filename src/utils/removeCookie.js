import writeCookie from "./writeCookie";

export default function removeCookie(key) {
	writeCookie(key, "", -1);
}
