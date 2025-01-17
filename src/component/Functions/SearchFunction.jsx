import React, {useState, createContext} from "react";

export const SearchContext = createContext();

function SearchSpace() {

    const [Val, setVal] = useState("")
    const change = event => {
        setVal(event.target.value)
    }

    return(
        <>
        <SearchContext.Provider value={Val}>
            <input
            onKeyDown={(e) => {
                if (e.key === "Enter")
                    alert(Val);
                }}
            type="text"
            className="h-full w-1/5 px-3 py-2 rounded-lg text-black"
            placeholder="Search"
            value={Val}
            onChange={change}
            />
        </SearchContext.Provider>

        </>

    )
}

export default SearchSpace;