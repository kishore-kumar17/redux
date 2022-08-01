import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useChat from "./useChat";

const Chatroom = () => {
  const { roomId } = useParams();
  const { chat, sendchat } = useChat(roomId);
  const [newchat, setnewchat] = useState("");



  const sendChange =()=>{
    sendchat(newchat);
    setnewchat("");
  }
//   console.log(newchat)


  const chatChange=(e)=>{
    setnewchat(e.target.value);
  }

  // console.log(roomId);

  return (
    <div>
      <h2>CHAT ROOM</h2>
      <div className="container">
        <h2>ROOM ID : {roomId}</h2>
        <div>
          <p>
            {chat.map((chat, i) => (
              <li key={i}> {chat.body}</li>
            ))}
          </p>
        </div>

        <textarea value={newchat} placeholder="write a new message" onChange={chatChange}></textarea>
        <Button onClick={sendChange}>SEND</Button>
      </div>
    </div>
  );
};

export default Chatroom;
