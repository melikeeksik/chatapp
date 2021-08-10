
const express = require('express');
const socketio =require('socket.io')
const app = express();
const http = require('http');
const server = http.createServer(app);
const io =socketio(server)

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection',(socket)=>{
  console.log("new connection")

  socket.on("disconnect",()=>{
    console.log("user had left")
  })
})