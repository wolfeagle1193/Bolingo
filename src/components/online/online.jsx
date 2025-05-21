import "./online.css";
import React from 'react'

function Online({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarprofileImageContainer">
      <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}

export default Online