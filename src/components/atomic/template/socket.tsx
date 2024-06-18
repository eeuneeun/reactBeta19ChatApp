// src/App.js
import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from '../../../types/socket';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    'http://localhost:3000',{
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
    socket.on('chat', (msg:string) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat');
    };
  }, []);

  function sendMessage(event : React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    socket.emit('chat', message);
    setMessage('');
  };

  return (<>
      <div className='codebox'>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form action="" onSubmit={(event)=>sendMessage(event)}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button >Send</button>
      </form>
    </>);
}

export default SocketConneter;