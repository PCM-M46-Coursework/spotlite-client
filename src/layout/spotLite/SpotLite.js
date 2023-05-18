import { TrackSearchProvider } from "../../context/trackSearchContext/TrackSearchContext";
import ContentPanel from "../contentPanel/ContentPanel";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import "./SpotLite.css";

import { SidebarMenuProvider } from "../../context/sidebarMenuContext/SidebarMenuContext";

export default function SpotLite({ user, setUser }) {
	return (
		<TrackSearchProvider>
			<section className="page-wrapper">
				<div className="header-wrapper">
					<Header user={user} setUser={setUser} />
				</div>
				<div className="main-wrapper">
					<SidebarMenuProvider user={user} setUser={setUser}>
						<div className="sidebar-wrapper">
							<SideBar />
						</div>
						<ContentPanel />
					</SidebarMenuProvider>
				</div>
				<div className="footer-wrapper">
					<Footer />
				</div>
			</section>
		</TrackSearchProvider>
	);
}
