import "./GetAllUsers.css";
import React, {useEffect, useState } from "react";
import { getAllUsers } from "../../utils";

const GetAllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
    
                setUsers(data.users);
 
                console.log(data);
            } catch (error) {
                console.log("Error fetching users", error);
            }
        };
    fetchUsers();
}, []);


    return (
        <>
        <h1>All Users</h1>
       
        <div className="card container">
            {users.map((user) => (
                <div className="card" key={user.username}>
                    {user.username} 
                    <br></br> 
                    {user.email}
                </div>
            ))}
        </div>
        
        </>
    );
};

export default GetAllUsers

