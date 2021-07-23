import React, { useState } from "react";
import "./css/RecommendedVideos.css";
import SuggestionBar from "./SuggestionBar";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  const [videoCards, setVideoCards] = useState([
    {
      title: "NEW Brydge Max+ vs Magic Keyboard - $100 Cheaper AND Better?",
      channel: "Max Tech",
      views: "51K views",
      timestamp: "1 month ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTKwhm7SuiCNZx_FLPVN0TcKANSww_j6FmsVB-m=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/r9c1imG6AxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3B01e65YTpvPWN_6BHqc3D9AGuQ",
    },
    {
      title: "NEW Brydge Max+ vs Magic Keyboard - $100 Cheaper AND Better?",
      channel: "Max Tech",
      views: "51K views",
      timestamp: "1 month ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTKwhm7SuiCNZx_FLPVN0TcKANSww_j6FmsVB-m=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/r9c1imG6AxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3B01e65YTpvPWN_6BHqc3D9AGuQ",
    },
    {
      title: "NEW Brydge Max+ vs Magic Keyboard - $100 Cheaper AND Better?",
      channel: "Max Tech",
      views: "51K views",
      timestamp: "1 month ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTKwhm7SuiCNZx_FLPVN0TcKANSww_j6FmsVB-m=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/r9c1imG6AxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3B01e65YTpvPWN_6BHqc3D9AGuQ",
    },
    {
      title: "NEW Brydge Max+ vs Magic Keyboard - $100 Cheaper AND Better?",
      channel: "Max Tech",
      views: "51K views",
      timestamp: "1 month ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTKwhm7SuiCNZx_FLPVN0TcKANSww_j6FmsVB-m=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/r9c1imG6AxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3B01e65YTpvPWN_6BHqc3D9AGuQ",
    },
  ]);
  return (
    <div className="recommendedVideos">
      <SuggestionBar />
      <div className="recommendedVideos__videos">
        {videoCards.map(
          ({ title, channel, views, timestamp, channelImage, image }) => (
            <VideoCard
              title={title}
              channel={channel}
              views={views}
              timestamp={timestamp}
              channelImage={channelImage}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RecommendedVideos;
