

function Cards(vids){
    return(
        <>
            <button>
                <div className="cards">
                    <img src={vids.image} alt="" className="aspect-video h-full rounded-md object-cover"/>
                    <h1 className="text-md font-bold mt-2 mb-0.5">{vids.title}</h1>
                    <p className="text-sm">{vids.channel}</p>
                </div>
            </button>
        </>
    );
}

export default Cards;