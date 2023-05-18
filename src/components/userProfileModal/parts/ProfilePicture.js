import { useContext, useRef, useState } from "react";
import { authCheck, getCookie } from "../../../utils";
import { UserProfileContext } from "../context/UserProfileContext";

export default function ProfilePicture({ user, setUser }) {
	const { renderPage } = useContext(UserProfileContext);
	const [previewImage, setPreviewImage] = useState(null);
	const fileUpload = useRef();

	function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewImage(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setPreviewImage(null);
		}
	}

	async function uploadProfilePic(username, file) {
		const payload = new FormData();
		payload.append("username", username);
		payload.append("image", file, file.name);
		try {
			const jwtToken = getCookie(process.env.REACT_APP_COOKIE_NAME);
			const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/upload-profile-pic`, {
				method: "PATCH",
				headers: {
					Authorization: `Bearer ${jwtToken}`,
				},
				body: payload,
			});
			console.log("Response:", response);
			const json = await response.json();
			if (!response.status === 201) return;
			authCheck(jwtToken, setUser);
			return json;
		} catch (error) {
			console.log(`Profile Pic Error: ${error.message}`);
		}
	}

	function handleButtonClick() {
		const file = fileUpload.current.files[0];
		uploadProfilePic(user.username, file).then(json => {
			console.log(json);
			renderPage("userProfile");
		});
	}

	return (
		<>
			<h2 className="page-title">Profile Picture</h2>

			<div className="form-row">
				<label htmlFor="file">Upload:</label>
				<input ref={fileUpload} type="file" id="file" onChange={handleFileChange} />
				<button className="pushRight" onClick={handleButtonClick} disabled={!fileUpload.current?.files[0]}>
					Upload
				</button>
			</div>
			{previewImage && (
				<div className="form-row">
					<label htmlFor="previewImage">Preview:</label>
					<img id="previewImage" className="profile-image-card" src={previewImage} alt="Preview" />
				</div>
			)}
		</>
	);
}
