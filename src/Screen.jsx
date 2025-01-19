

function BigScreen(videos){
    return(
        <>
        <div className="my-4 pb-2">
            <iframe src={videos.source} frameborder="0" className="aspect-video w-full rounded-xl"/>
            <div className="text-white border border-white rounded-md p-4 mt-4">
                <h1 className="text-xl font-semibold">{ videos.title }</h1>
                <p className="mt-3">{ videos.desc }</p>
            </div>
        </div>
        </>
    )
}

export default BigScreen;