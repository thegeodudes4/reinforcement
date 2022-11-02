import { Request, Response, NextFunction } from "express";
const db = require("../model/dbModel");
import * as dotenv from "dotenv";
dotenv.config();

interface TodoController {
  getTodos: (req: Request, res: Response, next: NextFunction) => void;
  addTodo: (req: Request, res: Response, next: NextFunction) => void;
  createOrg: (req: Request, res: Response, next: NextFunction) => void;
  markComplete: (req: Request, res: Response, next: NextFunction) => void;
  deleteTodo: (req: Request, res: Response, next: NextFunction) => void;
  assignTodo: (req: Request, res: Response, next: NextFunction) => void;
}

const TodoController: TodoController = {
  getTodos: async (req, res, next) => {
    try {
      const {userId} = res.locals.jwt;
      const getTodosQuery = "SELECT td.* FROM todos td JOIN users u ON u.org_id = td.org_id WHERE u.id = $1"
      const values = [16];
      const listOfTodos = await db.query(getTodosQuery, values);
      res.locals.todoList = listOfTodos.rows;
      return next();
    } catch (error) {
      return next({
              log: `Error caught in todoController.getTodos ${error}`,
        status: 409,
        message: "Unable to fetch list of todos!",
      })
    }
  },

  createOrg: async (req, res, next) => {
    try {
      const {orgName, userId} = req.body;
      const createOrgQuery = "INSERT INTO org (org_name) VALUES ($1) returning id;";
      const createNewOrgValues = [orgName];
      const createOrgResponse = await db.query(createOrgQuery, createNewOrgValues);
      const addCreatorToOrg = "UPDATE users SET org_id = $1 WHERE id = $2;" 
      const addCreatorToOrgValues = [createOrgResponse.rows[0].id, userId];
      const addCreatorToOrgResponse = await db.query(createOrgQuery, addCreatorToOrgValues);
      res.locals.orgId = createOrgResponse.rows[0].id;
      return next();
    } catch (error) {
      return next({
              log: `Error caught in todoController.createOrg ${error}`,
        status: 409,
        message: "Invalid org creation!",
      })
    }
  },
  addTodo: async (req, res, next) => {
    try {
      const {todos, orgId, userId} = req.body;
      const addTodoQuery = "INSERT INTO todos (todos, complete, org_id, users_id) VALUES ($1, $2, $3, $4) returning id";
      const values = [todos, false, orgId, userId];
      const addTodoResponse = await db.query(addTodoQuery, values);
      res.locals.todoId = addTodoResponse.rows[0].id;
      return next();
    } catch (error) {
      return next({
              log: `Error caught in todoController.addTodo ${error}`,
        status: 409,
        message: "Invalid new todo!",
      })
    }
  },
  markComplete: async (req, res, next) => {
    try {
      const {todoId, complete} = req.body;
      const addTodoQuery = "UPDATE todos SET complete = $1 WHERE id = $2;";
      const values = [complete, todoId];
      const addTodoResponse = await db.query(addTodoQuery, values);
      res.locals.status = 'Todo successfully updated';
      return next();
    } catch (error) {
      return next({
              log: `Error caught in todoController.markComplete ${error}`,
        status: 409,
        message: "Unable to update markComplete!",
      })
    }
  },
  deleteTodo: async (req, res, next) => {
    try {
      const {todoId} = req.params;
      const deleteTodoQuery = "DELETE FROM todos WHERE id = $1;";
      const deleteTodoValues = [todoId];
      const deleteTodoResponse = await db.query(deleteTodoQuery, deleteTodoValues);
      res.locals.status = 'Todo successfully deleted';
      return next();
    } catch (error) {
      return next({
              log: `Error caught in todoController.deleteTodo ${error}`,
        status: 409,
        message: "Unable to delete todo!",
      })
    }
  },
  assignTodo: async (req, res, next) => {
    try {
      const {todoId, userId} = req.body;
      const assignTodoQuery = "UPDATE todos SET users_id = $1 WHERE id = $2";
      const assignTodoValues = [userId, todoId];
      const assignTodoResponse = await db.query(assignTodoQuery, assignTodoValues);
      res.locals.status = 'Todo successfully deleted';
      return next();
    } catch (error) {
      return next({
              log: `Error caught in todoController.assignTodo ${error}`,
        status: 409,
        message: "Unable to assign todo!",
      })
    }
  },
};

export default TodoController;
