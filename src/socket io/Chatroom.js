import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useChat from "./useChat";

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
      <h2>CHAT ROOM</h2>
      <div className="container">
        <h2>ROOM ID : {roomId}</h2>
        <div>
          {chat.map((chat, i) => (
            <p key={i} 
            > {chat.body}</p>
          ))}
        </div>

        <input
          value={newchat}
          placeholder="write a new message"
          onChange={chatChange}
        ></input>
        <Button variant="outline-success" onClick={sendChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-send-plus"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z" />
            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Chatroom;
