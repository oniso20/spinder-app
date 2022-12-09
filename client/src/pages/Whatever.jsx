import React from "react";
import ProfileCard from "../components/ProfileCard";
import Nav from '../components/Nav';

import '../styles/dashboard.css';

const Whatever = () => {
  return (
    <>
    <div className="dash-info">
      <Nav />
      <h3>Welcome</h3>
      <p>UserName here </p>
      <button>Log out</button>
    </div>

    <div className="main-dash">
      <ProfileCard />
    </div>
    </>
  );
};

export default Whatever;
