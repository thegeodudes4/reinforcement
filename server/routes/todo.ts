import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

// signup route
router.post("/signup", userController.createUser, (req, res) => {
  res.status(200).json({ username: res.locals.user, id: res.locals.userId });
});

// login route
router.post("/login", userController.verifyUser, (req, res) => {
  res.status(200).json({ username: res.locals.user, id: res.locals.userId });
});

export default router;
