import React from 'react';
import Spotify from 'react-spotify-embed';
import '../styles/About.css';

import { useNavigate } from 'react-router-dom';

import mern from '../assets/mern.png';
import jenni from '../assets/selfie.jpg';

const About = () => {

    const navigate = useNavigate();

    return (
        <div className='wrapper-about'>
            <h2>About Spinder.</h2>
            <div className='project-intro'>
                <p>Spinder was created as part of Business College Helsinki Full Stack Developer program. This was our first major group project where we worked on a full stack application in a team of three. During our two month initial development process to create a minimum viable product we used agile methods like Scrum to keep up with our individual and common progress. During the project we got comfortable working in a team and using Git and GitHub to manage our project.</p>
                <p>Spinder features include creating a profile with a form that asks some questions about your preferences in music, you can also connect to your Spotify to display your currently playing track! This was possible with Spotify API. When you have created a profile you can go ahead and swipe through other Spinder users and chat with your matches. You can also find a music recommendation page that was curated by Team Spinder.</p>
                <p>If you wish to take Spinder for a spin and do not want to create a profile feel free to use our test user account:</p>
                <p>Email: tester@spinder.com</p>
                <p>Password: test</p>
                <p>Spinder was built using a modern MERN stack with MongoDB, Express, React and NodeJS.</p>
                <img src={mern} alt="mern-img" />
            </div>
            <>
                <h2>Meet the team behind Spinder</h2>
                <div className='meet-spinder'>
                <div className='team-profile'>
                    <div className='info-box'>
                    <h3>Jenni</h3>
                    <img src={jenni} alt="team member img" />
                    </div>
                    <a href='https://github.com/kirpister' target="_blank" rel="noreferrer" ><i class="bi bi-github"> GitHub</i></a>

                    <a href='https://kirpister.vercel.app/' target="_blank" rel="noreferrer" ><i class="bi bi-link-45deg"> Portfolio</i></a>
                    <div className='intro-text'>
                    <p>My role in creating Spinder was Front-End Developer and I was in charge of designing and bringing alive the Spinder UI.</p>
                    <p>As a music fan I was also excited to integrate Spotify to our project using Spotify API to able to share what you're currently listening to!</p>
                    <div className='spotify-link'>
                    <Spotify wide link="https://open.spotify.com/track/2NS5hylxl4QNQcD6Vjmtpj?si=f7668b685162442f" />
                    </div>
                    </div>
                  
                   
                    
                    
                </div>
                <div className='team-profile'>
                <div className='info-box'>
                    <h3>Onis</h3>
                    <img src alt="team member img" />
                    
                    </div>
                    <a href='#' target="_blank" rel="noreferrer" ><i class="bi bi-github"> GitHub</i></a>

                    <a href='#' target="_blank" rel="noreferrer" ><i class="bi bi-link-45deg"> Portfolio</i></a>
                    
                </div>
                <div className='team-profile'>
                <div className='info-box'>
                    <h3>Alexander</h3>
                    <img src alt="team member img" />
                    </div>
                    <a href='#' target="_blank" rel="noreferrer" ><i class="bi bi-github"> GitHub</i></a>

                    <a href='#' target="_blank" rel="noreferrer" ><i class="bi bi-link-45deg"> Portfolio</i></a>
                </div>
                <div className='back-btn'>
                    <i onClick={() => navigate(-1)} class="bi bi-skip-backward"></i>
                </div>
                
            </div>
            </>

            </div>


        
    );
};

export default About;