import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

import ProfileCard from "../components/ProfileCard";
import Nav from "../components/Nav";

import "../styles/dashboard.css";

const Whatever = () => {
  const [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;
  let navigate = useNavigate();

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

  useEffect(() => {
    getUser(userId);
  }, []);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    navigate("/");

    window.location.reload();
  };

  return (
    <>
      <div className="dash-info">
        <Nav />
        <h3>Welcome</h3>
        <p>{user?.first_name}</p>
        <button onClick={logout}>Log out</button>
      </div>

      <div className="main-dash">
        <ProfileCard user={user} />
      </div>
    </>
  );
};

export default Whatever;
