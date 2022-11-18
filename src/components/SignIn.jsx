import React, { useRef } from "react";
import { useUserContext } from "../context/UserContext";

const SignIn = (props) => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h2> Login </h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit">Sign In</button>
          <span id="newUser" onClick={forgotPasswordHandler}>
            Forgot Password?
          </span>
          <span onClick={props.signInClick}>
            Already have an account? click here
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
