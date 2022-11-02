import { Request, Response, NextFunction } from "express";
const db = require("../model/dbModel");
import * as dotenv from "dotenv";
dotenv.config();
import jwt_decode from "jwt-decode";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { JWT_SECRET } = process.env;

interface UserController {
  createOrSignInUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyJWT: (req: Request, res: Response, next: NextFunction) => void;
}
interface GoogleOAuthJWT {
  name: string;
  sub: string;
  email: string;
}


const UserController: UserController = {
  createOrSignInUser: async (req, res, next) => {
    // const {} = req.body.JWT;
    try {
      const { name, sub, email } : GoogleOAuthJWT = jwt_decode(req.body.JWT);
      const username = name;
      const password = sub;
      const checkExistingUsernameQuery =
        "SELECT id, password FROM users WHERE email = $1";
      const valuesCheckUsername = [email];
      const checkExistingUsernameResponse = await db.query(
        checkExistingUsernameQuery,
        valuesCheckUsername
      );
      if (!checkExistingUsernameResponse.rows.length) {
        // creating new account
      const hashedPword = await bcrypt.hash(password, 10);

      // make a post request to db to store hashed pw
      const saveHashedPassInDb =
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) returning id";
      const valuesSaveHashedPassInDb = [username, hashedPword, email];
      const response = await db.query(saveHashedPassInDb, valuesSaveHashedPassInDb);
      res.locals.userId = response.rows[0].id;
      res.locals.username = username;
      return next();
      }
      
      const comparedPassword = await bcrypt.compare(password, checkExistingUsernameResponse.rows[0].password)

      if (comparedPassword === true) {
        console.log('User exists and password matches');
        const token = jwt.sign(
          {
            username: username,
            userId: checkExistingUsernameResponse.rows[0].id,
          },
          JWT_SECRET,
          { expiresIn: '7d' }
        )
        res.cookie('access_token', token, {httpOnly: true});
        return next();
      }


      // account exists, logging in
    } catch (error) {
      return next({
        log: `Error caught in userController.createOrSignInUser ${error}`,
        status: 400,
        message: `Invalid login information ${error}`,
      });
    }
  },

  verifyJWT: async (req, res, next) => {
    try {
      const token = req.cookies.access_token;

      if(!token){
        next({
          status: 400,
          message: `Unauthorized request`,
        })
      }
      
      const verified = jwt.verify(token, JWT_SECRET);
      res.locals.jwt = verified;

      verified ? next() : next({
        status: 400,
        message: `Unauthorized request`,
      })

    } catch (error) {
      return next({
        log: `Error caught in userController.verifyJWT ${error}`,
        status: 400,
        message: `Invalid JWT ${error}`,
      });
    }
  },
};

export default UserController;
