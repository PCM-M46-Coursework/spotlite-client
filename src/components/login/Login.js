import "./Login.css";
import React from "react";
import { useRef } from "react";
import { loginUser } from "../../utils";

export default function Login({ setAuthAction, setUser }) {
	const username = useRef();
	const password = useRef();

	const submitHandler = async e => {
		e.preventDefault();
		await loginUser(
			username.current.value,
			password.current.value,
			setUser,
		);
	};

	function changeMode() {
		setAuthAction("register");
	}

	return (
		<form onSubmit={submitHandler} className="auth-form">
			<h2>Log into your account</h2>
			<input
				type="text"
				ref={username}
				id="username"
				name="username"
				placeholder="Username"
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
