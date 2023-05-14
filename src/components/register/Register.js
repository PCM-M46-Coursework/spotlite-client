import "./Register.css";
import React from "react";
import { useRef } from "react";
import { registerUser } from "../../utils";

export default function Register({ setAuthAction, setUser }) {
	const username = useRef();
	const email = useRef();
	const password = useRef();

	const submitHandler = async e => {
		e.preventDefault();
		await registerUser(
			username.current.value,
			email.current.value,
			password.current.value,
			setUser,
		);
	};

	function changeMode() {
		setAuthAction("login");
	}

	return (
		<form onSubmit={submitHandler} className="auth-form">
			<h2>Create an account</h2>
			<input
				type="text"
				ref={username}
				id="username"
				name="username"
				placeholder="Username"
				required
			/>
			<input
				type="email"
				ref={email}
				id="email"
				name="email"
				placeholder="Email Address"
				required
			/>
			<input
				type="password"
				ref={password}
				id="password"
				name="password"
				placeholder="Password"
				required
			/>
			<button type="submit">Register</button>
			<p>
				Already have an account?&nbsp;
				<span onClick={changeMode} className="changeMode">
					Login here.
				</span>
			</p>
		</form>
	);
}
