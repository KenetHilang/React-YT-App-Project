import NavBar from "./component/NavBar/NavBar"
import HomePage from "./HomePage"
import BigScreen from "./Screen"
import Sidebar from "./component/SideBar/Sidebar"

function App() {
  return (
    <>
      <Sidebar/>
      <NavBar/>
      <BigScreen title="This is where ur title should be" desc="This is where ur desc"/>
      <HomePage/>
    </>
  )
}

export default App
