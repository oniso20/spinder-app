import React, { useState } from "react";

import Nav from "../components/Nav";
import AuthModal1 from "../components/AuthModal1";

import "../styles/Home.css";
import coupleImg from "../assets/purplebg.jpg";
import couple2Img from "../assets/pinkishbg.jpg";
import couple3Img from "../assets/purplebg2.jpg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
    console.log("button clicked");
  };
  const handleLogIn = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <div className="wrapper">
      <Nav />

      <div className="intro-text">
        <h1>Spinder!</h1>

        <h3>Welcome to Spinder!</h3>
        <p>
          Connect throught music! <br /> some intro text about Spinder and all
          blaa blaa
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
