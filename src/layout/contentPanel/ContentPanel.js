import "./ContentPanel.css";
import { useContext } from "react";
import { SidebarMenuContext } from "../../context/sidebarMenuContext/SidebarMenuContext";

export default function ContentPanel() {
	const { selectedItem } = useContext(SidebarMenuContext);
	return <div className="selectedPage">{selectedItem.component}</div>;
}
