import express from "express";
const app = express();

import http from "http";
const server = http.createServer(app);

import { Server, Socket } from "socket.io";
const io = new Server(server, { cors: { origin: "*" } });

app.get("/", (req, res) => {
	res.send("It's on b*tch!");
});

io.on("connection", (socket: Socket) => {
    
	socket.on("login", (payload) => {
		io.emit("login", { ...payload });
	});
});

server.listen(3000, () => {
	console.log("It's on b*tch!");
});
