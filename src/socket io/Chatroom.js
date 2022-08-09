import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useChat from "./useChat";
import './Chatroom.css';


const Chatroom = () => {
  const { roomId } = useParams();
  const { chat, sendchat } = useChat(roomId);
  const [newchat, setnewchat] = useState("");

  const sendChange = () => {
    sendchat(newchat);
    setnewchat("");
  };
  //   console.log(newchat)

  const chatChange = (e) => {
    setnewchat(e.target.value);
  };

  // console.log(roomId);

  return (
    <div>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-9 col-md-9">
            <h3 className="mt-4 letter">Chat Application</h3>
          </div>
        </div>
        <div>
          {chat.map((chat, i) => (
            <p
              className={`message-item ${
                chat.ownedByCurrentUser ? "send-message" : "receiver-message"
              }`}
              key={i}
            >
              {chat.body}
            </p>
          ))}
        </div>
        <div className="topone">
          <input
            value={newchat}
            className="form-control mt-2"
            type="text"
            placeholder="Type a message..."
            onChange={chatChange}
          />
          <button className="send" onClick={sendChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};



export default Chatroom;
