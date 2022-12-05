import React from "react";
import "../styles/Home.css";
import Nav from "../components/Nav";
import coupleImg from "../assets/purplebg.jpg";
import couple2Img from "../assets/pinkishbg.jpg";
import couple3Img from "../assets/purplebg2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
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
          <button>
            <Link to="/auth">SIGN UP</Link>
          </button>
          <button>
            <Link to="/auth">LOG IN</Link>
          </button>
        </div>
      </div>

      <div className="intro-img">
        <img className="couple-img" src={coupleImg} alt="couple-img" />
        <img className="couple2-img" src={couple2Img} alt="couple-img" />
        <img className="couple3-img" src={couple3Img} alt="couple-img" />
      </div>
    </div>
  );
};

export default Home;
