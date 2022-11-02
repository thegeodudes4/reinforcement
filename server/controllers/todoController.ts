import { Request, Response, NextFunction } from "express";
const db = require("../model/dbModel");
import * as dotenv from "dotenv";
dotenv.config();

interface TodoController {
  getTodos: (req: Request, res: Response, next: NextFunction) => void;
  addTodos: (req: Request, res: Response, next: NextFunction) => void;
}

const TodoController: TodoController = {
  getTodos: async (req, res, next) => {
    console.log("you made it!")
    // try {
    //   const { user_id, org_id} = req.body;
    //   const text =
    //     "SELECT * WHERE org_id =";

    // } catch (error) {
    //   return next({
    //     log: `Error caught in todoController.createUser ${error}`,
    //     status: 409,
    //     message: "User already exists!",
    //   });
    // }
  },



  addTodos: async (req, res, next) => {
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
