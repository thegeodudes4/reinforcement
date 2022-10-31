import { Request, Response, NextFunction } from "express";
const db = require("../model/dbModel");
import * as dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET } = process.env;

interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: UserController = {
  createUser: async (req, res, next) => {
    try {
      const { username, password, email } = req.body;
      const text =
        "INSERT INTO users (username, password, email) VALUE ($1, $2, $3)";

      if (!username || !password || !email) {
        return next({
          log: null,
          status: 400,
          message: "Enter a valid username, email, and/or password",
        });
      }
      const values = [username, password, email];
      const response = await db.query(text, values);
      console.log("here", response);

      return next();
    } catch (error) {
      return next({
        log: `Error caught in userController.createUser ${error}`,
        status: 409,
        message: "User already exists!",
      });
    }
  },
  verifyUser: async (req, res, next) => {
    try {
      const { email, plainPassword } = req.body;

      if (!email || !plainPassword) {
        return next({
          log: null,
          message: "Please enter your email and/or password",
        });
      }

      return next();
    } catch (error) {
      return next({
        log: `Error caught in userController.verifyUser ${error}`,
        status: 400,
        message: `Error has occured in userController.verifyUser. ERROR: invalid email address and/or password ${error}`,
      });
    }
  },
};

export default userController;
