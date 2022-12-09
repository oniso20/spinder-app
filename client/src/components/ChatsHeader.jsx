import React from "react";
import { useCookies } from "react-cookie";

const ChatsHeader = ({ user }) => {
  console.log("This", user);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);

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
      <i className="log-out-icon" onClick={logout}>
        x
      </i>
    </div>
  );
};

export default ChatsHeader;
