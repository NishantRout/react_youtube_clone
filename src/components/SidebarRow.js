import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/SidebarRow.css";

function SidebarRow({ online, src, selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {src && <Avatar className="sidebarRow__avatar" src={src} />}

      {Icon != null && <Icon className="sidebarRow__icon" />}

      <h2 className="sidebarRow__title">{title}</h2>
      {online && <div className="sidebarRow__indicator"></div>}
    </div>
  );
}

export default SidebarRow;
