import Cards from "./component/Cards/Cards";
import { SearchContext } from "./App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BigScreen from "./Screen";
import Balls from "./component/Animations/Balls";
import Bg_Move from "./component/Animations/Backgrounds-movement";

function HomePage(){
    
    const API_KEY = import.meta.env.VITE_APP_YT2
    const [Val, setVal] = useContext(SearchContext)
    const YT_BASE = "https://youtube.googleapis.com/youtube/v3/search"
    const YT_LONG_1 = `${YT_BASE}?key=${API_KEY}&q=${encodeURIComponent(Val)}&type=video&part=snippet`
    const [Screen, setScreen ] = useState(null)

    const [VideoInfo, setVideoInfo] = useState([]);

    useEffect(() => {
        if (!Val) return

        const fetchData = async () => {
            try {
                const response = await axios.get(YT_LONG_1)
                setVideoInfo(response.data.items)
                console.log(VideoInfo)
            } catch (error) {
                console.error("Error:", error)
            }
        };
    
        fetchData();
      }, [Val, API_KEY]);

      const videoclicked = (videoclick) => {
        setScreen(videoclick)
        console.log(videoclick)
      } 

    if (!Val) return (
        <>
            <Bg_Move />
            <div className="flex items-center justify-center h-screen">
            <h1 className="font-bold md:text-6xl text-3xl text-white rounded-xl text-center absolute">
            LiveTube
            </h1>
            <Balls />
            </div>
        </>
    )
        
    else return(
        <>
        <div className="flex text-white mt-20 h-screen">
            <div className="flex-1 mx-4">
                <BigScreen 
                title={Screen ? Screen.snippet.title : ""}
                desc={Screen ? Screen.snippet.description : ""}
                source= {Screen ? `https://www.youtube.com/embed/${Screen.id.videoId}` : ""}
                />
            </div>

            <div className="w-1/3 h-full overflow-auto ">
                {VideoInfo.map(video => (
                <div key={video.id.videoId} onClick={() => videoclicked(video)}>
                    <Cards title={video.snippet.title} channel={video.snippet.channelTitle} image={video.snippet.thumbnails.high.url} />
                </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default HomePage;