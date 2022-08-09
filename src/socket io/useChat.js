import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT = "newchat";
const SOCKET_SERVERURL = "http://localhost:4000";

const useChat = (roomId) => {
  const [chat, setchat] = useState([]);
  const socketref = useRef();

  useEffect(() => {
    socketref.current = socketIOClient(SOCKET_SERVERURL, {
      query: { roomId },
    });
    
    socketref.current.on(NEW_CHAT, (message) => {
      const incomingChat = {
        ...message,
        ownedByCurrentUser: message.senderId === socketref.current.id,
      };
      // console.log(incomingchat);
      setchat((chat) => [...chat, incomingChat]);
    });

    return () => {
      socketref.current.disconnect();
    };
  }, [roomId]);

  const sendchat = (messagebody) => {
    socketref.current.emit(NEW_CHAT, {
      body: messagebody,
      senderId: socketref.current.id,
    });
  };
  return { chat, sendchat };
};

export default useChat;
