import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        console.log("SIGNUP route called!");
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match!" });
        }
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: "Username already exists!" });
        }
        //HASH password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //profilePic API = https://avatar.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        //creating the user object
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        if (newUser) {
            //create new jwt token
            generateTokenAndSetCookie(newUser._id,newUser.username, res);
            console.log("Token is generated!");
            //saving user object in User collection
            await newUser.save();

            //outputting response
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }else {
            res.status(400).json({ error: "Invalid user data!" });
        }
    } catch (error) {
        console.log("Error while signing up!", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
};

export const login = async(req, res) => {
    try {
        console.log("LOGIN route called!");
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const correctPassword = await bcrypt.compare(password, user?.password||"");
        if (user && correctPassword) {
            //create new jwt token
            generateTokenAndSetCookie(user._id,user.username, res);
            //outputting response
            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic,
                msg: "logged in successfully!"
            });
            console.log("logged in successfully!");
        } else {
            res.status(400).json({ error: "wrong username or password!" });
        }
    } catch (error) {
        console.log("Error while logging in!", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
};

export const logout = async(req, res) => {
    try {
        const encodedPayload = req.headers.cookie.split("=")[1].split(".")[1];
        const rawPayload = atob(encodedPayload);
        const user = JSON.parse(rawPayload);
        console.log(user.username+" logged out!");
        //delete jwt token
        console.log("LOGOUT route called!");
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ msg: `${user.username} logged out successfully!` });
    } catch (error) {
        console.log("Error while logging out!", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
};