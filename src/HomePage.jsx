import Cards from "./component/Cards/Cards";
import { useContext } from "react";
import { SearchContext } from "./component/Functions/SearchFunction";

function HomePage(){
    
    const API_KEY = import.meta.env.VITE_APP_YT
    const searched = useContext(SearchContext)

    return(
        <>
        <div className="grid grid-cols-5 gap-3">
            <p className="text-white">{`hellow ${searched}`}</p>
            <Cards title="helo" channel="Halosemua"/>
            <Cards title="How to Train Your Dragon" channel="Halosemua"/>
            <Cards title="Hai" channel="Halosemua"/>
            <Cards title="How to create React App" channel="Halosemua"/>
            <Cards title="Hai" channel="Halosemua"/>
        </div>
        </>
    );
};

export default HomePage;