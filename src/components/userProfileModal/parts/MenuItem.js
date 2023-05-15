export default function MenuItem({ id, label, selected, onClick }) {
	const handleClick = () => {
		onClick(id);
	};

	return (
		<li
			className={`profile-menu-item${selected ? " selected" : ""}`}
			onClick={handleClick}
		>
			{label}
		</li>
	);
}
