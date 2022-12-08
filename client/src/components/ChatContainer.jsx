import React from "react";
import Nav from "./Nav";
import ChatsHeader from "./ChatsHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatsDisplay from "./ChatsDisplay";

const ChatContainer = () => {
  return (
    <div className="chat-wrapper">
      {/* <Nav /> */}
      <div className="chat-headline">
        <h1>Chat</h1>
        <div className="chat-container">
          <div className="chat-profilesContainer">
            <ChatsHeader />
            <div>
              <button className="option">Matches</button>
              <button className="option">Chat</button>
            </div>
            <MatchesDisplay />
            <ChatsDisplay />
          </div>
          <div className="chat-displayContainer">
            <h2>Chat Display</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
