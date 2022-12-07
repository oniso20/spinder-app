import React from "react";
import Nav from "./Nav";
import ChatsHeader from "./ChatsHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatsDisplay from "./ChatsDisplay";

const ChatContainer = () => {
  return (
    <div className="wrapper">
      <Nav />
      <div className="intro-text">
             {/* <h2>Chat</h2> */}
        <div className="chat-container">
            <div className="chat-profilesContainer">
            <ChatsHeader  /> 
            <div>
                <button className="option">Matches</button>
                <button className="option">Chat</button>
            </div>    
            <MatchesDisplay />
            <ChatsDisplay />
            </div>
            <div className="chat-displayContainer">
            Lorem ipsum 
            </div>
        </div>
      </div>
      </div>

  );
};

export default ChatContainer;