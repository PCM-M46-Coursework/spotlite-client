import { useContext, useRef } from "react";
import { TrackSearchContext } from "../../context/trackSearchContext/TrackSearchContext";
import "./SearchBar.css";

const SearchBar = () => {
	const { setTrackSearchTerm } = useContext(TrackSearchContext);
	const searchInput = useRef();

	const handleSearch = () => {
		setTrackSearchTerm(searchInput.current.value);
	};

	return (
		<div className="search-bar">
			<input
				type="text"
				ref={searchInput}
				className="search-input"
				placeholder="Search..."
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBar;
