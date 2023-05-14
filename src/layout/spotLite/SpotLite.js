import { TrackSearchProvider } from "../../context/trackSearchContext/TrackSearchContext";
import ContentPanel from "../contentPanel/ContentPanel";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import "./SpotLite.css";

export default function SpotLite({ user, setUser }) {
	return (
		<TrackSearchProvider>
			<section className="page-wrapper">
				<div className="header-wrapper">
					<Header user={user} setUser={setUser} />
				</div>
				<div className="main-wrapper">
					<div className="sidebar-wrapper">
						<SideBar />
					</div>
					<div className="content-panel-wrapper">
						<ContentPanel />
					</div>
				</div>
				<div className="footer-wrapper">
					<Footer />
				</div>
			</section>
		</TrackSearchProvider>
	);
}
