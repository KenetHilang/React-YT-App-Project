import React, {useContext, useState} from "react";
import { SearchContext } from "../../App";

function SearchSpace() {

    const [Val, setVal] = useContext(SearchContext)
    const [Input, setInput] = useState("")

    const change = event => {
        setInput(event.target.value)
    }

    const enterKey = event => {
        if (event.key === "Enter")
        {setVal(Input)}
    }

    return(
        <>
            <input
            onKeyDown={enterKey}
            type="text"
            className="h-full w-1/5 px-3 py-2 rounded-lg text-black"
            placeholder="Search"
            value={Input}
            onChange={change}
            />
        </>

    )
}

export default SearchSpace;