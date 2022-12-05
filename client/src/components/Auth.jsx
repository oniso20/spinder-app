import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../styles/auth.css";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <>
      <div>
        {!index ? (
          <SignIn signInClick={toggleIndex} />
        ) : (
          <SignUp signInClick={toggleIndex} />
        )}
      </div>
    </>
  );
};

export default Auth;
