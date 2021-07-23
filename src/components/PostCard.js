import { Avatar } from "@material-ui/core";
import {
  Comment,
  MoreVert,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@material-ui/icons";
import React from "react";
import "./css/PostCard.css";

function PostCard({
  image,
  channelImage,
  title,
  timestamp,
  description,
  likes,
  comments,
}) {
  return (
    <div className="postCard">
      <div className="postCard__header">
        <Avatar className="postCard__avatar" src={channelImage} />
        <p className="postCard__title">
          {title} • {timestamp}
        </p>
      </div>
      <div className="postCard__body">
        <p className="postCard__description">{description}</p>
        <img src={image} alt="" className="postCard__image" />
      </div>
      <div className="postCard__footer">
        <div className="postCard__iconsLeft">
          <ThumbUpAlt className="postCard__icon" />
          <p className="postCard__likes">{likes}</p>
          <ThumbDownAlt className="postCard__icon" />
        </div>
        <div className="postCard__iconsRight">
          <Comment className="postCard__icon" />
          <p className="postCard__likes">{comments}</p>
          <MoreVert className="postCard__icon" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
