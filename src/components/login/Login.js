import "./Login.css";
import React, { useState } from "react";
import { useRef } from "react";
import { loginUser } from "../../utils";

export default function Login({ setAuthAction, setUser }) {
	const username = useRef();
	const password = useRef();
	const [errorMsg, setErrorMsg] = useState([]);

	const submitHandler = async e => {
		e.preventDefault();
		const data = await loginUser(username.current.value, password.current.value, setUser);
		console.log("Data:", data);
		if (data.errors) {
			console.log("Data Errors:", data);
			setErrorMsg([data.errors]);
		}
	};

	function changeMode() {
		setAuthAction("register");
	}

	return (
		<form onSubmit={submitHandler} className="auth-form">
			<h2>Log into your account</h2>
			{errorMsg.length > 0 && (
				<ul className="error-list">
					{errorMsg.map((error, index) => (
						<li key={index}>{error}</li>
					))}
				</ul>
			)}{" "}
			{/* Display error messages */}
			<input type="text" ref={username} id="username" name="username" placeholder="Username" required />
			<input type="password" ref={password} id="password" name="password" placeholder="Password" required />
			<button type="submit">Login</button>
			<p>
				Don't have an account?&nbsp;
				<span onClick={changeMode} className="changeMode">
					Register here.
				</span>
			</p>
		</form>
	);
}
