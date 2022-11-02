import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

// signup route
router.post("/signup", userController.createOrSignInUser, (req, res) => {
  res
    .status(200)
    .json({ username: res.locals.username, id: res.locals.userId });
});


export default router;
