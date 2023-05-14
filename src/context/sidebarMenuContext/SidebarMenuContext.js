import { createContext, useState } from "react";

const SidebarMenuContext = createContext();

function SidebarMenuProvider({ children }) {
	const [selectedItem, setSelectedItem] = useState("");

	return (
		<SidebarMenuContext.Provider value={{ selectedItem, setSelectedItem }}>
			{children}
		</SidebarMenuContext.Provider>
	);
}

export { SidebarMenuContext, SidebarMenuProvider };
