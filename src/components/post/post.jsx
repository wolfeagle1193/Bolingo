import "./post.css";
import React, { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import love from "../../assets/icones/love.png";
import like_icon from "../../assets/icones/blue_thumbs_up.png";
import user from"../../assets/person/brigitteMacron.jpg";
import { Users } from "../../sampleData";

const Post = ({post}) => {
  const [like,setLike]=useState(post.like);//ici la variable like stocke le nombre de likes et useState va permettre de d incrementer ou de decrementer selon lalogique mise en place
  const[isLiked,setIsLiked]=useState(false);
  const likeHandler =()=>{
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={Users.filter((user)=>user.id === post?.userId)[0].profilePicture}
              alt="user"
            />
            <span className="postUserName">{Users.filter((user)=>user.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
          </span>
          <img className="postImage" src={post.photo} alt="post_image" />
        
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postIconLike" src={like_icon} alt="J'aime" onClick={likeHandler} />
            <img className="postIcon"  src={love} alt="Mon favori" onClick={likeHandler} />
          <span className="postlikeNumber">{like} aiment </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} commentaires</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Post;
