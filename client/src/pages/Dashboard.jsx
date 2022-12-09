import React, { useState } from "react";
import { useEffect } from "react";
import MatchCard from "react-tinder-card";
import axios from "axios";
import { useCookies } from "react-cookie";

import ChatContainer from "../components/ChatContainer";
import Nav from "../components/Nav";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    // Log the value of the user state variable only when it changes
    console.log(user);
  }, [user]);

  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg",
    },
    {
      name: "Monica Hall",
      url: "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg",
    },
    {
      name: "Jared Dunn",
      url: "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-1024x1022.jpg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      {user && (
        <div className="dashboardContainer">
          <Nav />
          <div className="dashboard-headline">
            <h1>Chat</h1>
          </div>
          <div className="dashboard">
            <div className="profile-container">
              <ChatContainer user={user} />
            </div>
            <div className="swipe-container">
              <div className="card-container">
                {characters.map((character) => (
                  <MatchCard
                    className="swipe"
                    key={character.name}
                    onSwipe={(dir) => swiped(dir, character.name)}
                    onCardLeftScreen={() => outOfFrame(character.name)}
                  >
                    <div
                      style={{ backgroundImage: "url(" + character.url + ")" }}
                      className="card"
                    >
                      <h3>{character.name}</h3>
                    </div>
                  </MatchCard>
                ))}
                <div className="swipe-info">
                  {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
