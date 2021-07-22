import React from "react";
import "./css/Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  EmojiObjects,
  ExpandMoreOutlined,
  Explore,
  Feedback,
  Flag,
  Help,
  History,
  Home,
  LiveTv,
  OndemandVideo,
  Settings,
  ShoppingCart,
  SportsBaseball,
  SportsEsports,
  Subscriptions,
  Theaters,
  ThumbUpAlt,
  VideoLibrary,
  WatchLater,
  YouTube,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Home" />
      <SidebarRow Icon={Explore} title="Explore" />
      <SidebarRow Icon={Subscriptions} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your Videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAlt} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
      <h2 className="sidebar__heading">SUBSCRIPTIONS</h2>
      <SidebarRow
        online
        src="https://yt3.ggpht.com/ytc/AKedOLTN7aJ0ZFSv-M_GH2nPM9zDeXAUfxtsP31ZrIYROA=s176-c-k-c0x00ffffff-no-rj"
        title="Cosmic Wonder"
      />
      <SidebarRow
        online
        src="https://yt3.ggpht.com/ytc/AKedOLTKwhm7SuiCNZx_FLPVN0TcKANSww_j6FmsVB-m=s176-c-k-c0x00ffffff-no-rj"
        title="Max Tech"
      />
      <SidebarRow
        src="https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s176-c-k-c0x00ffffff-no-rj"
        title="Linus Tech Tips"
      />
      <SidebarRow
        src="https://yt3.ggpht.com/ytc/AKedOLQhVyYZ93e91BoMi4ultM1cyxHFx2R3gcpmtdWm0Q=s176-c-k-c0x00ffffff-no-rj"
        title="IMAX"
      />
      <SidebarRow
        src="https://yt3.ggpht.com/ytc/AKedOLSYVU0j5KAeEwuDpIkgO4LY3y-jHHwaaDMkMTdlDrA=s176-c-k-c0x00ffffff-no-rj"
        title="Marvel Entertainment"
      />
      <SidebarRow
        online
        src="https://yt3.ggpht.com/ytc/AKedOLQgL1jBVAGEEGwBzmLV38AWj0_yrdPw0vDxdpce0A=s176-c-k-c0x00ffffff-no-rj"
        title="Netflix"
      />
      <hr />
      <h2 className="sidebar__heading">MORE FROM YOUTUBE</h2>
      <SidebarRow Icon={YouTube} title="Youtube Premium" />
      <SidebarRow Icon={Theaters} title="Movies" />
      <SidebarRow Icon={SportsEsports} title="Gaming" />
      <SidebarRow Icon={LiveTv} title="Live" />
      <SidebarRow Icon={ShoppingCart} title="Fashion and Beauty" />
      <SidebarRow Icon={EmojiObjects} title="Learning" />
      <SidebarRow Icon={SportsBaseball} title="Sports" />
      <hr />
      <SidebarRow Icon={Settings} title="Settings" />
      <SidebarRow Icon={Flag} title="Report History" />
      <SidebarRow Icon={Help} title="Help" />
      <SidebarRow Icon={Feedback} title="Send feedback" />
    </div>
  );
}

export default Sidebar;
