var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/chatRoom.html', function(req, res){
    res.sendFile(__dirname + '/public/html/chatRoom.html');
});

http.listen(8081);

io.on('connection', function(socket){
    socket.on('disconnect', function(){
        console.log('A user has disconnected');
        //io.emit('disconnect-user-event');
    });

    socket.on('chat-message-event', function(msg){
      io.emit('chat-message-event', msg);
    });

    socket.on('login-user-event', function(user){
        io.emit('login-user-event', user);
    });
});