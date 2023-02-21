import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

import homeImg from '../assets/home.svg';
import searchImg from '../assets/search.svg';
import profileImg from '../assets/portrait.svg';
import musicImg from '../assets/music-alt.svg';
import matchImg from '../assets/following.svg';
import chat from '../assets/chat.png'

const Nav = () => {
  return (

        <nav>
            <ul>
                <li><NavLink to="/"><h2>S</h2></NavLink></li>
                <li><NavLink to="/dash"><img className="icon" src={homeImg} alt="home-icon" /></NavLink></li>
                {/* <li><a href="#"><img className="icon" src={searchImg} alt="search-icon" /></a></li> */}
                <li><NavLink to="/browse"><img className="icon" src={profileImg} alt="profile-icon" /></NavLink></li>
                <li><NavLink to="/music"><img className="icon" src={musicImg} alt="music-icon" /></NavLink></li>
                <li><a href="#"><img className="icon" src={matchImg} alt="match-icon" /></a></li>
                <li><NavLink to="/browse"><img className="icon" src={chat} alt="favorite-icon" /></NavLink></li>
            </ul>
        </nav>

  )
};

export default Nav;
