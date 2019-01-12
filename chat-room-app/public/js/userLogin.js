$(function () {
    var socket = io();
    $('form').submit(function(e){
        e.preventDefault();
        socket.emit('login-user-event', $('#userName').val());
        $('#userName').val('');
        window.location.href = "http://localhost:8081/chatRoom.html";
        return false;
    });
});