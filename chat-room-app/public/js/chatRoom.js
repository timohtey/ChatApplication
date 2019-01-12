$(function () {
    var socket = io();

    $('form').submit(function(e){
      e.preventDefault();
      socket.emit('chat-message-event', $('#messageInput').val());
      $('#messageInput').val('');
      return false;
    });

    // This event is triggered when a user enters sends a message
    socket.on('chat-message-event', function(msg){
      $('#messages').append($('<li>').text(msg));
    });

    // This event is triggered when a user leaves the room
    socket.on('disconnect-user-event', function(){
      $('#messages').append($('<li>').text('Someone has left the room'));
    });

    // This event is triggered when a user enters the room
    socket.on('login-user-event', function(userName){
      $('#messages').append($('<li>').text(userName + ' has entered the room'));
    });
});