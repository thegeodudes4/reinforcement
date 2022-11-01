import { Request, Response, NextFunction } from "express";
const db = require("../model/dbModel");
import * as dotenv from "dotenv";
dotenv.config();

interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

const UserController: UserController = {
  createUser: async (req, res, next) => {
    console.log("here", req.body);
    try {
      const { username, password, email } = req.body;
      if (!username || !password || !email) {
        return next({
          log: null,
          status: 400,
          message: "Enter a valid username, email, and/or password",
        });
      }
      const checkExistingUsernameQuery =
        "SELECT id FROM users WHERE username = $1";
      const valuesCheckUsername = [username];
      const checkExistingUsernameResponse = await db.query(
        checkExistingUsernameQuery,
        valuesCheckUsername
      );
      if (checkExistingUsernameResponse.rows.length) {
        return next({
          log: `Error caught in userController.createUser`,
          status: 409,
          message: "User already exists!",
        });
      }
      const addUserQuery =
        "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) returning id";
      const values = [username, password, email];
      const response = await db.query(addUserQuery, values);
      res.locals.userId = response.rows[0].id;
      res.locals.username = username;
      return next();
    } catch (error) {}
  },

  verifyUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next({
          log: null,
          message: "Please enter your email and/or password",
        });
      }

      const verifyUserQuery = "SELECT password, id FROM users WHERE email = $1";
      const values = [email];
      const checkExistingUsernameResponse = await db.query(
        verifyUserQuery,
        values
      );
      if (checkExistingUsernameResponse.rows[0].password === password) {
        res.locals.userId = checkExistingUsernameResponse.rows[0].id;
        return next();
      } else {
        return next({
          log: `Error caught in userController.createUser`,
          status: 409,
          message: `Incorrect email or password `,
        });
      }
    } catch (error) {
      return next({
        log: `Error caught in userController.verifyUser ${error}`,
        status: 400,
        message: `Incorrect email or password ${error}`,
      });
    }
  },
};

export default UserController;
