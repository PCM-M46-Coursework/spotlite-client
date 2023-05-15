import GetAllUsers from "./components/getAllUsers/GetAllUsers";
import SearchByTrack from "./components/searchByTrack/SearchByTrack";

// Add more menu items as needed
const menuMap = [
	{
		category: "Spotify Search",
		items: [
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
];

export default menuMap;
