import React, { useState } from "react";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "axios";
import { useCookies } from "react-cookie";

import ChatContainer from "../components/ChatContainer";
import Nav from "../components/Nav";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [choiceUsers, setChoiceUsers] = useState([]);
  const [genderedUsers, setGenderedUsers] = useState([]);
  const [mlUsers, setMlUsers] = useState([]);
  const [moodUsers, setMoodUsers] = useState([]);
  const [creditUsers, setCreditUsers] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [lastDirection, setLastDirection] = useState();

  const userId = cookies.UserId;

  const getUser = async (userId) => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gendered-users", {
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ml => mood and lyrics
  const getMlUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/ml-preference-users",
        {
          params: { ml: user?.lyrics_melody_preference },
        }
      );
      setMlUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoodUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/mood-preference-users",
        {
          params: { mood: user?.mood_song_preference },
        }
      );
      setMoodUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCreditUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/credit-preference-users",
        {
          params: { credit: user?.credit_song_preference },
        }
      );
      setCreditUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(userId);
    getGenderedUsers();
    getMlUsers();
    getMoodUsers();
    getCreditUsers();
  }, []);

  useEffect(() => {
    // Using the Array.filter() method to create an array of the defined and non-empty genderedUsers, mlUsers, moodUsers, and creditUsers arrays
    const choicesOfUser = [
      genderedUsers,
      mlUsers,
      moodUsers,
      creditUsers,
    ].filter((choices) => Array.isArray(choices) && choices.length > 0);

    // If the arrays array is not empty, concatenate and map its values
    if (choicesOfUser.length > 0) {
      setChoiceUsers((choice) => {
        choice = choicesOfUser;
        return choice.flat().map((user) => user);
      });
    }
  }, [user, genderedUsers, mlUsers, moodUsers, creditUsers]);

  const matchesUpdate = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:8000/addmatch", {
        userId,
        matchedUserId,
      });
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      matchesUpdate(swipedUserId);
      window.location.reload();
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    // console.log(name + " left the screen!");
  };

  const matchedUserChoicesId =
    user && user.matches
      ? user.matches.map(({ user_id }) => user_id).concat(userId)
      : undefined;

  //Avoid repeated users showing up
  const filteredChoiceUsers = Array.prototype.filter.call(
    choiceUsers,
    (choiceUser) => {
      return !matchedUserChoicesId?.includes(choiceUser.user_id);
    }
  );

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
                {filteredChoiceUsers &&
                  filteredChoiceUsers.map((choiceUser) => (
                    <TinderCard
                      className="swipe"
                      key={Math.random()}
                      onSwipe={(dir) => swiped(dir, choiceUser.user_id)}
                      onCardLeftScreen={() => outOfFrame(choiceUser.first_name)}
                    >
                      <div
                        style={{
                          backgroundImage: "url(" + choiceUser.url + ")",
                        }}
                        className="card"
                      >
                        <h3>{choiceUser.first_name}</h3>
                      </div>
                    </TinderCard>
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
