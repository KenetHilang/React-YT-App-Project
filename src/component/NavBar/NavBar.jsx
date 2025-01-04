import React, { useState, createContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../SideBar/Sidebar";
import SidebarContext from "../SideBar/SidebarStatus";

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const status = { sidebarOpen, setSidebarOpen };


  return (
    <>
      <nav className="flex py-3 px-4 w-full border-b border-gray-800 fixed top-0 z-10 bg-background">
        <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
          <GiHamburgerMenu color="white" className="size-8 my-2 mr-6" />
        </button>
        <h1 className="px-2 py-2 font-bold text-2xl text-white bg-red-500 rounded-xl">
          LiveTube
        </h1>
        <div className="flex flex-grow justify-end px-2 py-2 mx-10">
          <input
            type="text"
            className="h-full w-1/5 px-3 py-2 rounded-lg text-black"
            placeholder="&#xF002; Search"
          />
        </div>
      </nav>
      <SidebarContext.Provider value={status}>
      <Sidebar />
      </SidebarContext.Provider>
      
    </>
  );
}

export default NavBar;

