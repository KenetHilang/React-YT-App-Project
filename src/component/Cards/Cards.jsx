

function Cards(vids){
    return(
        <>
            <button>
                <div className="cards">
                    <img src={vids.image} alt="" className="rounded-md"/>
                    <h1 className="text-md font-bold mt-2.5 mb-0.5">{vids.title}</h1>
                    <p className="text-sm">{vids.channel}</p>
                </div>
            </button>
        </>
    );
}

export default Cards;