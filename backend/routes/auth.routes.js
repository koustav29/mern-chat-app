import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";


const router = express.Router();

//all rest methods can be done this way!  -- GET,POST,PUT, DELETE,PATCH
router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;
