const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
const server = app.listen(3000,console.log("Socket.io Hello World server started!"));
const io = require('socket.io')(server);
io.on('connection',(socket)=>{
    socket.on('message-from-client-to-server',(msg)=>{
        console.log(msg);
    });
    socket.emit('message-from-server-to-client','Hello world')
});
