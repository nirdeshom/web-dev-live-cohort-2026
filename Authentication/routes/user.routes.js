import express from "express";
import { forgetPassword, getMe, login, logoutUser, registerUser, resetPassword, verifyUser } from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser)
router.get("/verify/:token", verifyUser)  // Variable injection (token)
router.post("/login", login)
router.get("/profile", isLoggedIn, getMe)
router.get("/logout", isLoggedIn, logoutUser)
router.get("/forget", forgetPassword)
router.get("/reset/:token", resetPassword)

export default router;
