import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/AuthModal.css";

const AuthModal1 = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [setCookie] = useCookies(["user"]);

  let navigate = useNavigate();

  // console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
    setIsSignUp(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Password and confirm password needs to match");

        return;
      } else {
        const response = await axios.post(
          // removed http://localhost:8000
          `https://spinder-api.cyclic.app/${isSignUp ? "signup" : "login"}`,
          {
            email,
            password,
          }
        );

        // setCookie("Email", response.data.email);
        setCookie("UserId", response.data.userId);
        setCookie("AuthToken", response.data.token);

        const success = response.status === 201;

        if (success && isSignUp) navigate("/onboarding");
        if (success && !isSignUp) navigate("/dash");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-modal-container">
      <div className="auth-modal" onClick={handleClick}>
        <span className="closeIcon">&otimes;</span>
      </div>
      <div className="text-area">
        <h4 className="h4">{isSignUp ? "CREATE AN ACCOUNT" : "LOG IN"}</h4>
      </div>
      <form className="form-signup" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(event) => setPassword(event.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="Confirm password"
            required={true}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        )}
        {isSignUp ? <button>Sign Up</button> : <button>Log In</button>}

        <p>{error}</p>
      </form>
    </div>
  );
};

export default AuthModal1;
