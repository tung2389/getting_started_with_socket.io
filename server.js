const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 3006,function(){
    console.log("Connected");
});
const io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('an user connected');
  socket.on('disconnect', function(){
    console.log('an user disconnected');
  });
  socket.on('chat message',function(msg){
    io.emit('chat message',msg);
  });
});