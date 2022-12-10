import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import ProfileCard from "../components/ProfileCard";
import Nav from "../components/Nav";

import "../styles/dashboard.css";

const Whatever = () => {
  const [user, setUser] = useState({});
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

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);

    window.location.reload();
  };

  return (
    <>
      <div className="dash-info">
        <Nav />
        <h3>Welcome</h3>
        <p>{user.first_name}</p>
        <button onClick={logout}>Log out</button>
      </div>

      <div className="main-dash">
        <ProfileCard user={user} />
      </div>
    </>
  );
};

export default Whatever;
