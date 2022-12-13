import React, { useState } from "react";
import { useCookies } from "react-cookie";

import AuthModal1 from "../components/AuthModal1";

import "../styles/Home.css";
import coupleImg from "../assets/purplebg.jpg";
import couple2Img from "../assets/pinkishbg.jpg";
import couple3Img from "../assets/purplebg2.jpg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const authToken = cookies.AuthToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie("UserId", cookies.UserId);
      removeCookie("AuthToken", cookies.AuthToken);
      window.location.reload();
      return;
    }
    setShowModal(true);
    console.log("button clicked");
  };
  const handleLogIn = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    
    <div className="wrapper">
      {/* <Nav /> */}

      <div className="intro-text">
        <h1>Spinder!</h1>

        <h3>Welcome to Spinder!</h3>
        <p>
          Connect through music! <br />
          Looking for a gig buddy? Someone to take road trips with without
          having to argue over the playlist? <br />
          Maybe something more? <br />
          <br />
          This is the place for you.
        </p>

        <div className="btns">
          <button onClick={handleClick}>SIGN UP</button>
          <button onClick={handleLogIn}>LOGIN</button>
        </div>
      </div>

      {showModal && (
        <AuthModal1
          setShowModal={setShowModal}
          setIsSignUp={setIsSignUp}
          isSignUp={isSignUp}
        />
      )}

      <div className="intro-img">
        <img className="couple-img" src={coupleImg} alt="couple-img" />
        <img className="couple2-img" src={couple2Img} alt="couple-img" />
        <img className="couple3-img" src={couple3Img} alt="couple-img" />
      </div>
    </div>
    
  );
};

export default Home;
