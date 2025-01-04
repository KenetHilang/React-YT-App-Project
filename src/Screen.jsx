

function BigScreen(videos){
    return(
        <>
        <div className="m-6 flex min-h-96 mt-28">
            <iframe src="https://placehold.co/1920x1080" frameborder="0" className="w-full"/>
            <div className="text-white border border-white rounded-md w-2/3 p-4">
                <h1 className="text-2xl font-semibold">{ videos.title }</h1>
                <p className="mt-2">{ videos.desc }</p>
            </div>
        </div>
        </>
    )
}

export default BigScreen;