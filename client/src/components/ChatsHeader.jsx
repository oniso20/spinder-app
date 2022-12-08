import React from 'react';

const ChatsHeader = () => {
    return (
        <div className='chat-container-header'>
            <div className="profile">
            <div className="img-container">
             <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </div>
            <h3>UserNames</h3>
            </div>      
            <i className="log-out-icon">x</i>              
        </div>
    );
};

export default ChatsHeader;
