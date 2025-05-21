import "./rightbar.css";
import React from "react";
import gift from "../../assets/things/gift.png";
import pub from "../../assets/things/rightbarAd.jpg";
import friendImage from "../../assets/person/media.jpg";
import Online from "../online/online";
import { Users } from "../../sampleData";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="giftImg" src={gift} alt="cadeau" />
          <span className="birthdayText">
            <b>Melania Trump</b> et <b>Celine Dion</b> fetent leur anniversaire
            aujourd'hui
          </span>
        </div>
        <img className="rightbarAd" src={pub} alt="advertisement" />
        <h4 className="rightbarTitle">connexions en ligne</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="RightbarTitle">Informations personnelles</h4>
        <div className="RightbarInfo">
          <div className="RightbarInfoItem">
            <span className="RightbarInfoKey">adresse :</span>
            <span className="RightbarValue">Paris</span>
          </div>
          <div className="RightbarInfoItem">
            <span className="RightbarInfoKey">Originaire :</span>
            <span className="RightbarValue">De Paris</span>
          </div>
          <div className="RightbarInfoItem">
            <span className="RightbarInfoKey">Situation matrimoniale :</span>
            <span className="RightbarValue">Mariée</span>
          </div>
        </div>
        <h4 className="RightbarTitle"> Amis </h4>
        <div className="RightbarFollowings">
          <div className="RightbarFollowing">
            <img
              src={Users[0].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName"> Perez Rudy</span>
          </div>
          <div className="RightbarFollowing">
            <img
              src={Users[1].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName">Agatha Christie </span>
          </div>
          <div className="RightbarFollowing">
            <img
              src={Users[2].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName">Magloire Some</span>
          </div>
          <div className="RightbarFollowing">
            <img
              src={Users[3].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName">Diagne Bourry</span>
          </div>
          <div className="RightbarFollowing">
            <img
              src={Users[4].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName">Pape Samba</span>
          </div>
          <div className="RightbarFollowing">
            <img
              src={Users[5].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName">Christiane Iliza</span>
          </div>
          <div className="RightbarFollowing">
            <img
              src={Users[6].profilePicture}
              alt=""
              className="RightbarFollowingImg"
            />
            <span className="RightbarFollowingName">Aleandra Cistie</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar/>
      </div>
    </div>
  );
};

export default Rightbar;
