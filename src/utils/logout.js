import removeCookie from "./removeCookie.js";

export function logout(setUser) {
	removeCookie("jwt_token");
	setUser({});
}
