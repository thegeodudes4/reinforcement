import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

// signup route
router.post("/signup", userController.createOrSignInUser, (req, res) => {
  res
    .status(200)
    .json({ username: res.locals.username, id: res.locals.userId });
});

//? Do we actually need a full on route for .verifyJWT, or can we just invoke this middleware where necessary?
// login route
router.post("/login", userController.verifyJWT, (req, res) => {
  res.status(200).json({ jwt: res.locals.jwt });
});

export default router;
