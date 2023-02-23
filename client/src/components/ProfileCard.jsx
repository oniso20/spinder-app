import React from "react";
import Spotify from './Spotify';

import pin from "../assets/pin.png";
import gender from "../assets/gender.png"
import arrow from "../assets/arrows.png"

import "../styles/ProfileCard.css";



const ProfileCard = ({ user }) => {
  
  let date =  new Date().getFullYear();

  return (

    <div className="profile-card">
    
     <img className="pfp" src={user.url} alt="profile-img" />

     <div className="info-box">
      <h3>{user.first_name}, {`${date - user.dob_year}`}</h3>


      <p><img className="pin" src={pin} alt="location-pin" /> {user.location}</p>

      <img className="pfp" src={user.url} alt="profile-img" />

      <img className="pfp" src={user.url} alt={user.first_name} />


      {/* <p>Birthday: {`${user.dob_month}, ${user.dob_day}`}</p> */}
      <p><img className="gender-icon" src={gender} alt="gender-icon" /> {user.gender_identity}</p>
      <br />
      <p> {user.about}</p>
      
      </div>

   
     <div className="music-data-box">
        <p>Lyrics or melody?</p>
        <span><img className="pin" src={arrow} alt="arrow" /> {user.lyrics_melody_preference}</span>
        <p>End credit song?</p>
        <span><img className="pin" src={arrow} alt="arrow" /> {user.credit_song_preference}</span>
        <p>Song to get into the mood?</p>
        <span><img className="pin" src={arrow} alt="arrow" /> {user.mood_song_preference}</span>
        <p>Favorite eras of music?</p>
          {user.eras?.map((era, idx) => {
            return <span key={idx}> <img className="pin" src={arrow} alt="arrow" />  {era} </span>;
            })}

      </div>
      <div className="spotify-box">

     <Spotify />
      </div> 
   


     
    </div>
  );
};

export default ProfileCard;
