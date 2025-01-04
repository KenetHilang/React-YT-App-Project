import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <>
    <nav className=" bg-co">
        <div className="flex py-3 px-4 w-full border-b border-gray-800">
            <button>
                <GiHamburgerMenu color="white" className=" size-8 my-2 mr-6"/>
            </button>
            <h1 className="px-2 py-2 font-bold text-2xl text-white bg-red-500 rounded-xl">LiveTube</h1>
            <div className=" flex flex-grow justify-end px=2 py-2 mx-10">
                <input type="text" className="h-full w-1/5 px-3 py-2" placeholder="&#xF002; Search"/>
            </div>
        </div>
    </nav>
    </>
  );
}

export default NavBar