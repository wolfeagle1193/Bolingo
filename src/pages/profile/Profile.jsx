import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/rightbar.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import Feed from "../../components/feed/feed.jsx";
import user from"../../assets/person/brigitteMacron.jpg";
import cover from"../../assets/users/cover_image.jpg";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <SideBar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={cover} className="profileCoverImg" alt="" />
              <img src={user} className="profileUserImg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Macron brigitte</h4>
              <span className="profileInfoDesc">Salut les Francais!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
