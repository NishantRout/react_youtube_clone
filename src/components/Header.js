import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="Youtube Logo"
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <div className="header__inputButton">
          <SearchIcon className="header__search" />
        </div>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__avatar"
          src="https://pbs.twimg.com/profile_images/1018110148315832321/bXV2rxEy.jpg"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
}

export default Header;
