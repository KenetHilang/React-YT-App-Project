import React, {createContext} from "react";

const SidebarContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {}
});

export default SidebarContext;
