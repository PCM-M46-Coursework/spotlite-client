import { useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
	const searchInput = useRef();

	const handleSearch = () => {
		console.log("Search button clicked!");
	};

	return (
		<div className="search-bar">
			<input
				type="text"
				ref={searchInput}
				className="search-input"
				placeholder="Search..."
			/>
			<button className="search-button" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
