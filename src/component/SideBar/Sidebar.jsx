import React, { useState, useEffect, useContext } from "react";
import SidebarContext from "./SidebarStatus";

function Sidebar() {

  const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext)
  const [isVisible, setIsVisible] = useState(sidebarOpen);

  const close = () => {
    setSidebarOpen(false);
  }

  useEffect(() => {
    setIsVisible(sidebarOpen);
    document.addEventListener('mousedown', close)
  }, [sidebarOpen]);

  

  return (
    <>  
          <div className={`w-60 h-full bg-background z-30 fixed border-r border-g ray-600 top-0 transition-transform duration-300 pt-2 ${ isVisible ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-4">Menu</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">Home</a>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-white" onClick={close}>Go back</button>
                </li>
              </ul>
            </div>
          </div>
    </>

  );
}

export default Sidebar;

