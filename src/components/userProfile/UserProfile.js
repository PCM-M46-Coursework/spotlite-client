import { useRef } from "react";
import "./UserProfile.css";

export default function UserProfile({
	user,
	setUser,
	isUserProfileModalOpen,
	setIsUserProfileModalOpen,
}) {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	return (
		<div className="user-profile-container" open={isUserProfileModalOpen}>
			<dialog className="user-profile" open={isUserProfileModalOpen}>
				<section className="auth-form">
					<h2>User Profile</h2>
					<div className="row">
						<input
							type="text"
							ref={username}
							id="username"
							name="username"
							placeholder="Username"
							defaultValue={user.username}
							required
						/>
						<button>Edit</button>
					</div>
					<div className="row">
						<input
							type="email"
							ref={email}
							id="email"
							name="email"
							placeholder="Email Address"
							defaultValue={user.email}
							required
						/>
						<button>Edit</button>
					</div>
					<div className="row">
						<input
							type="password"
							ref={password}
							id="password"
							name="password"
							placeholder="Password"
							required
						/>
						<button>Change</button>
					</div>
					<button onClick={() => setIsUserProfileModalOpen(false)}>
						Close
					</button>
				</section>
			</dialog>
		</div>
	);
}
