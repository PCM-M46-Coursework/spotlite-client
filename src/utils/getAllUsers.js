import getCookie from "./getCookie";

export const getAllUsers = async (username) => {
    try {
        const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME)
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/users/get-all-users`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                },
            }
            );
            const data = await response.json();
            return data;
            } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    export default getAllUsers;