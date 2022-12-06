import { sendSignInLinkToEmail } from "firebase/auth";
import React, { useState } from "react";

import "../styles/AuthModal.css";

const AuthModal1 = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
    setIsSignUp(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Password and confirm password needs to match");
      }
      console.log("Push info to database");
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

        <input className="submit-button" type="submit" />
        <p>{error}</p>
      </form>
    </div>
  );
};

export default AuthModal1;
