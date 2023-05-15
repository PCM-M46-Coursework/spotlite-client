import { useContext, useEffect } from "react";
import { SidebarMenuContext } from "../../context/sidebarMenuContext/SidebarMenuContext";
import sidebarMenuMap from "../../sidebarMenuMap";
import "./SideBar.css";

export default function SideBar() {
	const { selectedItem, setSelectedItem } = useContext(SidebarMenuContext);

	useEffect(() => {
		if (selectedItem) return;
		setSelectedItem(sidebarMenuMap[0].items[0]);
	}, [selectedItem, setSelectedItem]);

	const handleMenuItemClick = item => {
		setSelectedItem(item);
	};

	return (
		<>
			{sidebarMenuMap.map(cat => (
				<div className="category">
					<h3>{cat.category}</h3>
					<ul className="category-list">
						{cat.items.map(item => (
							<li
								className={`menu-item${
									selectedItem.id === item.id
										? " selected"
										: ""
								}`}
								key={item.id}
								onClick={() => handleMenuItemClick(item)}
							>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
}
