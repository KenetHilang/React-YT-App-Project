import Cards from "./component/Cards/Cards";
import { SearchContext } from "./App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BigScreen from "./Screen";

function HomePage(){
    
    const API_KEY = import.meta.env.VITE_APP_YT
    const [Val, setVal] = useContext(SearchContext)
    const YT_BASE = "https://youtube.googleapis.com/youtube/v3/search"
    const YT_LONG_1 = `${YT_BASE}?key=${API_KEY}&q=${encodeURIComponent(Val)}&type=video&part=snippet`

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

    return(
        <>
        <BigScreen title="This is where ur title should be" desc="This is where ur desc"/>
        <div className="grid grid-cols-5 gap-3 text-white">
            {VideoInfo.map(video => (
                <div key={video.id.videoId}>
                    <Cards title={video.snippet.title} channel={video.snippet.channelTitle} image={video.snippet.thumbnails.high.url} />
                </div>
                ))}
        </div>
        </>
    );
};

export default HomePage;