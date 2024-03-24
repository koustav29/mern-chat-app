import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async(req, res, next) => {
    try {
        //getting json webtoken from logged inuser cookies
        const token = req.cookies.jwt;

        //check if user is loggd in
        if(!token){
            return res.status(401).json({ error: "Unauthorized! - No token provided!" });
        }
        //if logged in verify token validity
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).json({ error: "Unauthorized! - Invalid token!" });
        }

        //check if user exists
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({ error: "Unauthorized! - User not found!" });
        }

        //if user exists
        console.log("sending message from "+user.username);
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware!", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

export default protectRoute;