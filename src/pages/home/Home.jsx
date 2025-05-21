import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/rightbar.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import Feed from "../../components/feed/feed.jsx";
import "./home.css";
import React from 'react';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
