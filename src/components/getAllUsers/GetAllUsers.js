import "./GetAllUsers.css";
import React, { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../utils";
import UserCard from "./parts/UserCard";
import { SidebarMenuContext } from "../../context/sidebarMenuContext/SidebarMenuContext";

const GetAllUsers = () => {
	const [users, setUsers] = useState([]);
	const {user} = useContext(SidebarMenuContext) 

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

			<div className="card-container">
				{users.map(u => (
					<UserCard user={u} isAdmin={user.userrole === "admin"} />
				))}
			</div>
		</>
	);
};

export default GetAllUsers;
