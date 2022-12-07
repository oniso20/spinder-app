import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

// import axios from 'axios';
const spotifyApi = new SpotifyWebApi();

const SpotifyAuth = () => {
  
  const CLIENT_ID = "d58deafe30da46acae3bde80bd045155"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  
  const [token, setToken] = useState('')
  const [nowPlaying, setNowPlaying] = useState({})
  // const [artists, setArtists] = useState([])
  
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      token = hash.substring(1).split('&').find(el => el.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
     
    }
    setToken(token)
    console.log(token)
 
},[]);

    const logout = () => {
      setToken('')
      window.localStorage.removeItem('token')
    }

 
    const getNowPlaying = () => {
      spotifyApi.getMyCurrentPlayingTrack().then((response) => {
        console.log(response);
        setNowPlaying({
          name: response.item.name,
          albumArt: response.item.album.images[0].url
        })
      })
    }  

  return (

    <div className="spotify-auth">

      <h2>Spotify API</h2>
      {!token ?
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>LOGIN TO SPOTIFY</a>
        : <button onClick={logout}>Log Out</button>}


        {token ?
          <div>
           <p>Now Playing: {nowPlaying.name}</p>
          <img src={nowPlaying.albumArt} style={{height: 150}}/>
          </div>
         
          
        : <p>Please Log In</p>
       
        }

      <button onClick={() => getNowPlaying()}>Get track!</button>
    </div>
  );
}

export default SpotifyAuth;

