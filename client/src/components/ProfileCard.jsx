import React, { useState, useEffect } from "react";
import email from "../assets/email.png";
import heart from "../assets/heart.png";
import pfp from "../assets/pfp.png";
import "../styles/ProfileCard.css";


const ProfileCard = ({ user }) => {
  


  return (
    <div className="profile-card">
    

      <h3>{user.first_name}</h3>

      <img className="pfp" src={user.url} alt="profile-img" />

      <p>
        Birthday: {`${user.dob_month}, ${user.dob_day}`}, Gender:
        {user.gender_identity}
      </p>
      <p>Location: {user.location}</p>
      <p>Short intro: {user.about}</p>

      <div className="music-data-box">
        <p>Lyrics answer: {user.lyrics_melody_preference}</p>
        <p>Credit song: {user.credit_song_preference}</p>
        <p>Mood Song: {user.mood_song_preference}</p>
        <p>
          Eras array:
          {user.eras?.map((era, idx) => {
            return <span key={idx}>{era}</span>;
          })}
        </p>
      </div>

      <div className="icons-box">
        <img src={email} alt="email" />
        <img src={heart} alt="heart" />
      </div>
    </div>
  );
};

export default ProfileCard;
