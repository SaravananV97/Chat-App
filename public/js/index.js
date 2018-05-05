var socket = io();
socket.on("connect",() => {
  console.log("Connected to Chat Server!!");
});
socket.on("disconnect",() => {
  console.log("Disconnected with Chat Server!!");
});
socket.on("newMsg",(msg) => {
  console.log("New Text received", msg);
});
