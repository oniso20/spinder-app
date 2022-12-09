import React from "react";
import ChatsHeader from "./ChatsHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatsDisplay from "./ChatsDisplay";

const ChatContainer = ({ user }) => {
  return (
    <div className="chat-container">
      <ChatsHeader user={user} />
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay />
      <ChatsDisplay />
    </div>
  );
};

export default ChatContainer;
