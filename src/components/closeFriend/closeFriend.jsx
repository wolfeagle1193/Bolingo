import React from "react";
import "./closeFriend.css";

function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={user.profilePicture}
        alt="friend_image"
      />
      <span className="sidebarFrienName"> {user.username}</span>
    </li>
  );
}

export default CloseFriend;
