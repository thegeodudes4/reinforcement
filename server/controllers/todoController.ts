import { Request, Response, NextFunction } from "express";
const db = require("../model/dbModel");
import * as dotenv from "dotenv";
dotenv.config();

interface TodoController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

const TodoController: TodoController = {
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
        log: `Error caught in todoController.createUser ${error}`,
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
        log: `Error caught in todoController.verifyUser ${error}`,
        status: 400,
        message: `Error has occured in todoController.verifyUser. ERROR: invalid email address and/or password ${error}`,
      });
    }
  },
};

export default TodoController;
