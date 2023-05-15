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
];

export default menuMap;
