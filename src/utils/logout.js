import removeCookie from "./removeCookie.js";

export default function logout(setUser) {
	removeCookie(process.env.REACT_APP_COOKIE_NAME);
	removeCookie("swapi_refresh_token");
	setUser({});
}
