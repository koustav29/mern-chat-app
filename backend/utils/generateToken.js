import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,username, res) => {
    const token = jwt.sign({userId,username},process.env.JWT_SECRET_KEY,{expiresIn:"15d"});
    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevent XSS attack - cross-site scripting attack
        sameSite: "strict",//prevent Cross Site Request Forgery attack
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;