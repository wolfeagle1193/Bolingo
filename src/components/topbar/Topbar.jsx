import React from "react";
import "./Topbar.css";
import user from "../../assets/person/brigitteMacron.jpg";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbarBox">
      <div className="topbarLeft">
        <span className="logo">Bolingo </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Retrouver des amis" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarlink">Accueil</span>
          <span className="topbarlink">Historique</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={user} alt="userImage" className="topbarImage" />
      </div>
    </div>
  );
};

export default Topbar;
