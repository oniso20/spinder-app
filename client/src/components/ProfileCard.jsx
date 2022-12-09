import React, { useState, useEffect } from "react";
import email from '../assets/email.png';
import heart from '../assets/heart.png';
import pfp from '../assets/pfp.png';
import '../styles/ProfileCard.css';

import axios from "axios";

const ProfileCard = () => {

const [userData, setUserData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/users')
  .then((res) => console.log(res.data))
  // console.log(res);
},[]);


  return (
    
    <div className="profile-card">

     {/* {userData.map(user => key={})} */}

    <h3>Username</h3>

    <img className="pfp" src={pfp} alt="profile-img" />

    <p>Age, Gender</p>
    <p>Location</p>
    <p>Short intro</p>

    <div className="music-data-box">
    <p>Lyrics answer</p>
    <p>Credit song</p>
    <p>Mood Song</p>
    <p>Eras array</p>
    </div>

    <div className="icons-box">
        <img src={email} alt="email" />
        <img src={heart} alt="heart" /> 
    </div>

    </div> 
    
     );
};

export default ProfileCard;
