//package imports
import path from "path";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


//file imports
import authRoutes from "../backend/routes/auth.routes.js";
import messageRoutes from "../backend/routes/message.routes.js";
import userRoutes from "../backend/routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app,server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // it'll allow express to destructure req.body to get data
//use = middleware to use prefix in routes for more readable codes
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

//express middleware gives us the flexibility to handle static frontend files from backend itself
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend","dist","index.html"));
});

// app.post("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("Hello world?"+req);
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}!`);
});

