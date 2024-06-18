
'use server';

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {

  console.log("연결")
  socket.on("chat", (msg)=>{
    console.log(msg)

    // socket.broadcast.emit("chat", msg)
    io.emit("chat", msg)
  })
});

io.on("disconnect", (reason) => {
    console.log("연결 끊김", reason);
  });

httpServer.listen(3000);

