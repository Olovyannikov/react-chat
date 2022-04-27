import express from "express";
import socket from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const port = 4200;

app.use(express.json());
app.use(cors());

const server = new http.Server(app);
const io = new socket.Server(server, {
  cors: {
    origin: "*",
  },
});

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

app.post("/rooms", (req, res) => {
  const { roomId, name } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ] as any)
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  socket.on("room/join", ({ roomId, name }) => {
    socket.join(roomId);
    rooms?.get(roomId)?.get("users")?.set(socket.id, name);
    const users = rooms?.get(roomId)?.get("users").values() && [...rooms?.get(roomId)?.get("users").values()];
    socket.broadcast.to(roomId).emit("room/joined", users);
  });

  console.log(`User connected: ${socket.id}`);
});

server.listen(port, () => {
  console.log(`Running on ${port}`);
});
