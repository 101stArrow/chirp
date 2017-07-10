var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var low = require('lowdb');
var bodyParser = require('body-parser');
var morgan = require('morgan');

morgan('tiny')
app.use(express.static(__dirname+'/public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
      console.log('user disconnected');
  });
  socket.on('join', function(data){
      console.log(data)
      socket.username = data.username
      socket.roomname = data.room
      socket.join(data.room)
  })
  socket.on('message', function(data){
      io.emit('message', data)
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
   