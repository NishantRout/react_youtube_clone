import React, { useState } from "react";
import "./css/RecommendedVideos.css";
import LatestPosts from "./LatestPosts";
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
      title: "Introducing the New Range Rover Velar | Elegance",
      channel: "Land Rover India",
      views: "6.1K views",
      timestamp: "2 hours ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQPGu2GlB1rITge_SgxLAXAxg9JsysFriJsKCWNbQ=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/EqLtMI_v-fU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuOJwC5RfT3FKoBOPSfxWYHcs4bg",
    },
    {
      title: "Avengers: Endgame - Trailer 2 | Dolby Cinema | Dolby",
      channel: "Dolby",
      views: "1.8M views",
      timestamp: "2 years ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQxTUbGj6b1l0E4O3xAsX4kSSpcAixVF6aPZbN8VQ=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/GxmDE6q7XBE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAQaRGyKoMeA4sMTR5MsbCEeH3ubA",
    },
    {
      title: "Spider-Man No Way Home Charlie Cox Daredevil CONFIRMED?",
      channel: "The Cosmic Wonder",
      views: "115K views",
      timestamp: "1 day ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTN7aJ0ZFSv-M_GH2nPM9zDeXAUfxtsP31ZrIYROA=s176-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/B-zO3k64wig/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAFMD18Yhkv0qC2O-Zsb7M1qtEVZg",
    },
    {
      title:
        "Marvel Studios’ Shang-Chi and the Legend of the Ten Rings | Official Trailer",
      channel: "Marvel Entertainment",
      views: "13M views",
      timestamp: "4 weeks ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSYVU0j5KAeEwuDpIkgO4LY3y-jHHwaaDMkMTdlDrA=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/8YjFbMbfXaQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTypF1yTn0EcW37auHCj8DnvkgPA",
    },
    {
      title: "Switzerland in 8K ULTRA HD HDR - Heaven of Earth (60 FPS)",
      channel: "8K World",
      views: "12M views",
      timestamp: "8 months ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/linlz7-Pnvw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAuKQrT0GfkMk-xpSmIWd3fvg0MZg",
    },
    {
      title: "Tokyo Olympics opening ceremony to begin later - BBC News",
      channel: "BBC News",
      views: "17K views",
      timestamp: "3 hours ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSJf_PYHF9czwJ0c99ARvsOkYLzoUGXSVhvOvlAkoc=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/PrK14PquHR0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDif-9wkkl-s6gg2fdVGTeMTdg6pg",
    },
    {
      title: "THIS is the FUTURE of Apple!",
      channel: "ZONEofTECH",
      views: "197K views",
      timestamp: "4 months ago",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQdetXnECCYM6GInT1NfnCgT-ln3I9ffg98lWRswg=s68-c-k-c0x00ffffff-no-rj",
      image:
        "https://i.ytimg.com/vi/LHGxVKytpJE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA9DtoeLiv3r1WSbMSUtmVTO2PU2w",
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
      <hr />
      <LatestPosts />
    </div>
  );
}

export default RecommendedVideos;
