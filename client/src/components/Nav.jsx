import React from "react";
import '../styles/Nav.css';

import homeImg from '../assets/home.svg';
import searchImg from '../assets/search.svg';
import profileImg from '../assets/portrait.svg';
import musicImg from '../assets/music-alt.svg';
import matchImg from '../assets/following.svg';
import favImg from '../assets/diamond.svg';

const Nav = () => {
  return (

        <nav>
            <ul>
                <li><h2>S!</h2></li>
                <li><a href="#"><img className="icon" src={homeImg} alt="home-icon" /></a></li>
                <li><a href="#"><img className="icon" src={searchImg} alt="search-icon" /></a></li>
                <li><a href="#"><img className="icon" src={profileImg} alt="profile-icon" /></a></li>
                <li><a href="#"><img className="icon" src={musicImg} alt="music-icon" /></a></li>
                <li><a href="#"><img className="icon" src={matchImg} alt="match-icon" /></a></li>
                <li><a href="#"><img className="icon" src={favImg} alt="favorite-icon" /></a></li>
            </ul>
        </nav>

  )
};

export default Nav;
