import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import "./css/LatestPosts.css";
import PostCard from "./PostCard";

function LatestPosts() {
  const [posts, setPosts] = useState([
    {
      title: "Screen Culture",
      timestamp: "20 hours ago",
      description:
        "LOKi • Finale DELETED 'KANG' Scenes 🔻 https://youtu.be/71qbfghOtDA",
      likes: "3K",
      comments: "20",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSnr3349Zpf6OCV2LDTZ1uRvCwIohcnwyzhqkaqhw=s76-c-k-c0x00ffffff-no-rj-mo",
      image:
        "https://yt3.ggpht.com/5idLOQ8LLK9ddtSGzUdoMo9NeVjaV-ZPiVgX3isI-gJSTOsWbrkekyUZAcJIKInpX-YhleAF39aW=s720-c-fcrop64=1,38000000c7ffffff-nd",
    },
    {
      title: "Screen Culture",
      timestamp: "20 hours ago",
      description:
        "LOKi • Finale DELETED 'KANG' Scenes 🔻 https://youtu.be/71qbfghOtDA",
      likes: "3K",
      comments: "20",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSnr3349Zpf6OCV2LDTZ1uRvCwIohcnwyzhqkaqhw=s76-c-k-c0x00ffffff-no-rj-mo",
      image:
        "https://yt3.ggpht.com/5idLOQ8LLK9ddtSGzUdoMo9NeVjaV-ZPiVgX3isI-gJSTOsWbrkekyUZAcJIKInpX-YhleAF39aW=s720-c-fcrop64=1,38000000c7ffffff-nd",
    },
    {
      title: "Screen Culture",
      timestamp: "20 hours ago",
      description:
        "LOKi • Finale DELETED 'KANG' Scenes 🔻 https://youtu.be/71qbfghOtDA",
      likes: "3K",
      comments: "20",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSnr3349Zpf6OCV2LDTZ1uRvCwIohcnwyzhqkaqhw=s76-c-k-c0x00ffffff-no-rj-mo",
      image:
        "https://yt3.ggpht.com/5idLOQ8LLK9ddtSGzUdoMo9NeVjaV-ZPiVgX3isI-gJSTOsWbrkekyUZAcJIKInpX-YhleAF39aW=s720-c-fcrop64=1,38000000c7ffffff-nd",
    },
    {
      title: "Screen Culture",
      timestamp: "20 hours ago",
      description:
        "LOKi • Finale DELETED 'KANG' Scenes 🔻 https://youtu.be/71qbfghOtDA",
      likes: "3K",
      comments: "20",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSnr3349Zpf6OCV2LDTZ1uRvCwIohcnwyzhqkaqhw=s76-c-k-c0x00ffffff-no-rj-mo",
      image:
        "https://yt3.ggpht.com/5idLOQ8LLK9ddtSGzUdoMo9NeVjaV-ZPiVgX3isI-gJSTOsWbrkekyUZAcJIKInpX-YhleAF39aW=s720-c-fcrop64=1,38000000c7ffffff-nd",
    },
  ]);
  return (
    <div className="latestPosts">
      <h2>Latest YouTube Posts</h2>

      <div className="latestPosts__cards">
        {posts.map(
          ({
            title,
            timestamp,
            description,
            likes,
            comments,
            channelImage,
            image,
          }) => (
            <PostCard
              title={title}
              timestamp={timestamp}
              description={description}
              likes={likes}
              comments={comments}
              channelImage={channelImage}
              image={image}
            />
          )
        )}
      </div>
      <div className="latestPosts__expand">
        <ExpandMore className="" />
      </div>
    </div>
  );
}

export default LatestPosts;
