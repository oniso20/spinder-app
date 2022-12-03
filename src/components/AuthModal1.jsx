import React, { useState } from "react";

import "../styles/AuthModal.css";

const AuthModal1 = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  const isSignUp = true;

  return (
    <div className="auth-modal-container">
      <div className="auth-modal" onClick={handleClick}>
        <span className="closeIcon">&otimes;</span>
      </div>
      <div>
        <h4>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h4>
      </div>
    </div>
  );
};

export default AuthModal1;
