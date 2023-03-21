import React from "react";
import ChatsHeader from "./ChatsHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatsDisplay from "./ChatsDisplay";
import { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatsHeader user={user} />

      <div>
        <button className="option" onClick={() => setClickedUser(null)}>
          Matches
        </button>
        {/* <button className="option" disabled={!clickedUser}>
          Chat
        </button> */}
      </div>

      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatsDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
