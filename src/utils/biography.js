import getCookie from "./getCookie";

const biography = async (username, newBiography) => {
    try {
        const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME)
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/users/biography`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                },
                body: JSON.stringify({username, biography: newBiography}),
            }
            );
            const data = await response.json();
            return data;
            } catch (error) {
            console.error("Error updating biography:", error);
        }
    };

    export default biography;