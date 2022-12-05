import React from "react";
import email from '../assets/email.png';
import heart from '../assets/heart.png';
import pfp from '../assets/pfp.png';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    

    <div className="profile-card">

      <h3>Username</h3>

    <img className="pfp" src={pfp} alt="profile-img" />

    <p>Info whatevs <br />
        Age: goes in here <br />
        Location: blaa blaa
    </p>

    <div className="music-data-box">

    <p>Some music list <br />
    Data from Spotify <br />
    <br />
    Top Artists  <br />
    1. Taylor Swift  <br />
    2. Julien Baker  <br />
    3. La Dispute  <br />
    4. Sleater-Kinney  <br />
    5. The Japanese House </p>

    </div>

    <div className="icons-box">
        <img src={email} alt="email" />
        <img src={heart} alt="heart" />
    </div>

    </div>
 )
};

export default ProfileCard;
