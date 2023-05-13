import { TrackSearchProvider } from "../../context/trackSearchContext/TrackSearchContext";
import ContentPanel from "../contentPanel/ContentPanel";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./SpotLite.css";

export default function SpotLite({ user, setUser }) {
	return (
		<TrackSearchProvider>
			<section className="layout">
				<div className="header">
					<Header user={user} setUser={setUser} />
				</div>
				<div className="leftSide">Sidebar</div>
				<div className="body">
					<ContentPanel />
				</div>
				<div className="footer">
					<Footer />
				</div>
			</section>
		</TrackSearchProvider>
	);
}
