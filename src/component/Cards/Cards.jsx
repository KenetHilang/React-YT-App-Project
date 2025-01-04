

function Cards(vids){
    return(
        <>
            <button>
                <div className="cards">
                    <img src="https://placehold.co/600x400" alt="" className="rounded-md"/>
                    <h1 className="text-md font-bold mt-2.5 mb-0.5">{vids.title}</h1>
                    <p className="text-sm">{vids.channel}</p>
                </div>
            </button>
        </>
    );
}

export default Cards;