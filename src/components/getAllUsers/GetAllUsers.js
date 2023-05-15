import "./GetAllUsers.css";
import React, {useEffect, useState } from "react";
import { getAllUsers } from "../../utils";

const GetAllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.log("Error fetching users", error);
            }
        };
    fetchUsers();
}, []);


    return (
        <>
        <h1>All Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    );
};

export default GetAllUsers

