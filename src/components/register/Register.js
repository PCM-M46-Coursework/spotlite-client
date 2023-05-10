import "./Register.css";
import React from "react";
import { useRef } from "react";
import { registerUser } from "../../utils";

const Register = ({ setUserMode, setUser }) => {
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
		setUserMode("login");
	}

	return (
		<form onSubmit={submitHandler} className="register-form">
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
};
export default Register;
