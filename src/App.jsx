import NavBar from "./component/NavBar/NavBar"
import HomePage from "./HomePage"

import Sidebar from "./component/SideBar/Sidebar"
import { createContext, useState } from "react"

export const SearchContext = createContext();

function App() {

  const [Val, SetVal] = useState("");

  return (
    <>
      <Sidebar/>
      <SearchContext.Provider value={[Val, SetVal]}>
        <NavBar/>
        <HomePage/>
      </SearchContext.Provider>
    </>
  )
}

export default App
