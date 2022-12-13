import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ChatsHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  let navigate = useNavigate();

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    navigate("/");

    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          {<img src={user.url} alt={user.first_name} />}
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <p className="log-out-icon" onClick={logout}>x</p>
    </div>
  );
};

export default ChatsHeader;
