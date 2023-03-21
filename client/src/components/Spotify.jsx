import React, { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";


const redirectUri = "https://spinder.netlify.app/dash";
// const redirectUri = "http://localhost:3000/dash";



const scopes = ["user-read-playback-state"];

const Spotify = () => {

  const [token, setToken] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);


  const handleLogin = () => {

    const redirectToSpotify = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token`;
    window.location.href = redirectToSpotify;
  };

  useEffect(() => {
    const token = queryString.parse(window.location.hash).access_token;
    if (token) {
      setToken(token);
    }
    window.location.hash = '';
  }, []);

  useEffect(() => {
    if (!token) return;

    const getCurrentTrack = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCurrentTrack(response.data);
    };

    getCurrentTrack();

    }, [token]);


  return (
    <div className="current-track">
   {token ? (
        <>
          {currentTrack ? (
            <p>Now playing: {currentTrack.item.name} by {currentTrack.item.artists[0].name}</p>
            ) : (
            <p>Loading current track...</p>
          )}
        </>
      ) : (
        <span className="tooltip" data-text="Login to display your currently playing track!"> <button className="spotify-btn" onClick={handleLogin}>Login with Spotify</button></span>
      )}

   
    </div>
  );
}

export default Spotify;