const Chat = ({ descendingOrderMessages }) => {
  return (
    <>
      <div className="chat-display">
        {descendingOrderMessages.map((message, _index) => (
          <div key={_index}>
            <div className="chat-message-header">

            <div className="msg-cont">

              <div className="img-container">
                <img src={message.img} alt={message.name + " profile"} />
              </div>
              <p>{message.name}:</p> <p className="msg">{message.message}</p>
            </div>
        
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default Chat;
