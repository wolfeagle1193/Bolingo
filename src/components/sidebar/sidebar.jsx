import "./sidebar.css";
import { RssFeed, HelpOutline, WorkOutline, School, Event, Bookmark, Group, PlayCircleFilledOutlined, Chat } from "@material-ui/icons";
import friendImage from '../../assets/person/media.jpg'; // Import de l'image
import React from 'react';
import CloseFriend from "../closeFriend/closeFriend";
import { Users } from "../../sampleData";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <div className="sidebarListemText">Fil d'actualites</div>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <div className="sidebarListemText">Discussions</div>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <div className="sidebarListemText">Videos</div>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <div className="sidebarListemText">Groupes</div>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <div className="sidebarListemText">Favoris</div>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <div className="sidebarListemText">Questions</div>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <div className="sidebarListemText">Emplois</div>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <div className="sidebarListemText">Cours</div>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <div className="sidebarListemText">Evenements</div>
          </li>
        </ul>
        <button className="sidebarButton">Voir Plus</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendlist">
         {Users.map((u)=><CloseFriend key={u.id} user={u}/>)}
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
