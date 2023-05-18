import { createContext, useState } from "react";
import sidebarMenuMap from "../../sidebarMenuMap";

const SidebarMenuContext = createContext();

function SidebarMenuProvider({ children, user, setUser }) {
	const [selectedItem, setSelectedItem] = useState("");

	function navigateTo(id) {
		const page = sidebarMenuMap
            .flatMap(category => category.items)
            .find(item => item.id === id) || null;
        if (page == null) return;
        setSelectedItem(page);
	}

	return (
		<SidebarMenuContext.Provider value={{ selectedItem, setSelectedItem, navigateTo, user, setUser }}>
			{children}
		</SidebarMenuContext.Provider>
	);
}

export { SidebarMenuContext, SidebarMenuProvider };
