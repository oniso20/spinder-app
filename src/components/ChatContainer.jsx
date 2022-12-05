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
             <h1>Chats</h1>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, delectus distinctio impedit atque similique ullam dolor et recusandae, maxime aspernatur tenetur possimus dolore repellat voluptas pariatur architecto ducimus magnam qui!
            </div>
        </div>
      </div>
      </div>

  );
};

export default ChatContainer;