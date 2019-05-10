const express = require("express");
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static('./'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('newuser', function (username) {
        socket.username = username;
        console.log(socket.username + ' has connected');
    });

    socket.on('chat message', function (msg) {
        var message = msg

        if (message.includes("telefoonnummer")) {
            io.emit('chat message', msg);
        } else if (message.includes("naam")) {
            io.emit('chat message', msg);
        } else if (message.includes("email")) {
            io.emit('chat message', msg);
        } else if (message.includes("regio")) {
            io.emit('chat message', msg);
        } else {
            io.emit('chat message', msg);
        }
    });

    socket.on('phonenumber', function (value) {
        io.emit('phonenumber', value);
    })

    socket.on('email', function (value) {
        io.emit('email', value);
    })

    socket.on('name', function (value) {
        io.emit('name', value);
    })

    socket.on('tussen', function (value) {
        io.emit('tussen', value);
    })

    socket.on('achternaam', function (value) {
        io.emit('achternaam', value);
    })

    socket.on('validate', function (value) {
        io.emit('validate', value);
    })

    socket.on('regio', function (value) {
        io.emit('regio', value);
    })
});

http.listen(process.env.PORT || 3000)