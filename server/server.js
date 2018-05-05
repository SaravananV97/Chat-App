const path = require('path');
const socketIO = require("socket.io");
const http = require('http');
const publicPath = path.join(__dirname, "../","public");
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
const Server = http.createServer(app);
var io = socketIO(Server);
io.on("connection",(socket) => {
  console.log("New Client Connected!!!");
  socket.on("disconnect",() => {
    console.log("A Client Disconnected");
  });
  socket.on("CreateMsg",(msg) => {
    io.emit("newMsg",msg);
  })
});
Server.listen(port,() => {
  console.log(`Listening on Port ${port}..`);
});
