import "../privacyCentre.css";

export default function SiteCredits() {
	return (
		<>
			<h2 className="pc-page-title">Site Credits</h2>

			<p className="pc-detail-text">
				SpotLite is a full stack web application that uses the Spotify Web API to allow users to search for, and
				stream music on our site. Users can create an account, so that they save their favourite artists, and
				genres. With persistent login, using cookies and JWT tokens, users can easily access their saved artists
				and genres, and quickly find, and play their favourite music.
			</p>

			<h3 className="pc-section-title">The Team</h3>
			<ul className="actual-list">
				<li>Andy Harper</li>
				<li>Beth Nugent</li>
				<li>Miguel Acevedo</li>
				<li>Pete Matthews</li>
				<li>Ramon Merrell</li>
			</ul>

			<h3 className="pc-section-title">Technologies</h3>
			<p className="pc-detail-text">The SpotLite web application utilises the following technologies:</p>
			<p className="pc-detail-text">
				<ul className="actual-list">
					<li>MERN Stack (MySQL/MongoDB, Express, React, Node.js)</li>
					<li>Spotify Web API</li>
					<li>MySQL Database</li>
					<li>MongoDB Image Cache</li>
					<li>JWT (JSON Web Tokens)</li>
					<li>bcrypt for password hashing</li>
					<li>Railway and Clever Cloud for hosting databases</li>
					<li>Thunder Client for testing RESTful API</li>
				</ul>
			</p>

			<h3 className="pc-section-title">Features</h3>
			<p className="pc-detail-text">SpotLite offers the following features:</p>
			<p className="pc-detail-text">
				<ul className="actual-list">
					<li>User registration, and account management</li>
					<li>Search and streaming of music using Spotify Web API</li>
					<li>Saving favourite Spotify tracks</li>
					<li>Persistent login with cookies, and JWT tokens</li>
					<li>Profile page for each user</li>
					<li>Secure password storage with bcrypt salted hashing</li>
					<li>Authorisation and authentication, using JWT</li>
					<li>MySQL database for storing user information</li>
					<li>MongoDB database for storing user profile pictures</li>
				</ul>
			</p>
		</>
	);
}
