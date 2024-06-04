// src/App.js
import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from '../../../types/socket';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'http://localhost:3001',{
    transports : ['websocket'],
    withCredentials : true,
    extraHeaders: {
      "Content-Type": "text"
    }
});

function SocketConneter() {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // namespace type 에러, 작동에는 문제없음
    socket.on('chat message', (msg:string) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Socket.IO Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default SocketConneter;