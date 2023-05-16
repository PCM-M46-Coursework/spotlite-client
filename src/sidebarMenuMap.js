import GetAllUsers from "./components/getAllUsers/GetAllUsers";
import SearchByTrack from "./components/spotify/searchByTrack/SearchByTrack";
import Playlists from "./components/spotify/playlists/Playlists";
import SiteCredits from "./components/privacyCentre/credits/SiteCredits";
import ContactDataProtection from "./components/privacyCentre/dataProtection/ContactDataProtection";
import CookiePolicy from "./components/privacyCentre/cookiePolicy/CookiePolicy";
import PrivacyPolicy from "./components/privacyCentre/privacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/privacyCentre/legal/TermsAndConditions";

// Add more menu items as needed
const menuMap = [
	{
		category: "Spotify Search",
		items: [
			{
				id: "playlists",
				title: "Your Playlists",
				component: <Playlists />,
			},
			{
				id: "searchByTrack",
				title: "Search by Track",
				component: <SearchByTrack />,
			},
		],
	},
	{
		category: "Extras",
		items: [
			{
				id: "getAllUsers",
				title: "View All Users",
				component: <GetAllUsers />,
			},
		],
	},
	{
		category: "Privacy Centre",
		items: [
			{
				id: "credits",
				title: "Site Credits",
				component: <SiteCredits />,
			},
			{
				id: "legal",
				title: "Terms & Conditions",
				component: <TermsAndConditions />,
			},
			{
				id: "privacyPolicy",
				title: "Privacy Policy",
				component: <PrivacyPolicy />,
			},
			{
				id: "cookiePolicy",
				title: "Cookie Policy",
				component: <CookiePolicy />,
			},
			{
				id: "dataProtection",
				title: "Contact DPO",
				component: <ContactDataProtection />,
			},
		],
	},
];

export default menuMap;
