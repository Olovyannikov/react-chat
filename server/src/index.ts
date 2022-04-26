import express from 'express';
import socket from 'socket.io';
import http from 'http';

const app = express();
const port = 4200;

const server = new http.Server(app);
const io = new socket.Server(server, {
    cors: {
        origin: '*'
    }
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', socket => {
    console.log(`User connected: ${socket.id}`);
});

server.listen(port, () => {
    console.log(`Running on ${port}`);
});
