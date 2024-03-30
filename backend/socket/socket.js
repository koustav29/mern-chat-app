import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

export const getRecieverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};  //{userId:socket.id}

io.on("connection", (socket) => {
    console.log("a user connected",socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != undefined) userSocketMap[userId] = socket.id;
    //as we updated the userSocketMap, we need to send it to all connected clients
    //io.emit() helps us to send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on() method is used to listen to the event. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected",socket.id);
        //delete the user as socket is disconnected
        delete userSocketMap[userId];
        //as userSocketMap is updated, we need to send the event to all connected clients
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export { app,io,server };