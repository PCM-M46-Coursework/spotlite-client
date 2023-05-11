import "./SpotLite.css";

export default function SpotLite({ user, setUser }) {
	return (
		<section className="layout">
			<div className="header">Header</div>
			<div className="leftSide">Sidebar</div>
			<div className="body">Content Panel</div>
			<div className="footer">Footer (Will contain media player)</div>
		</section>
	);
}
