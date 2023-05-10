import removeCookie from "./removeCookie.js";

export default function logout(setUser) {
	removeCookie("jwt_token");
	setUser({});
}
