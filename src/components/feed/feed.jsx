import "./feed.css";
import Share from "../share/share.jsx";
import React from "react";
import Post from "../post/post.jsx";
import { Posts } from "../../sampleData.js";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
