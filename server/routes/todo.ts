import express from "express";
import userController from "../controllers/userController";
import todoController from "../controllers/todoController";

const router = express.Router();
// signup route
router.get("/getTodos/:orgId",  todoController.getTodos,  (req, res) => {
  res.status(200).json(res.locals.todoList);
});

router.post("/createOrg", todoController.createOrg, (req, res) => {
  res.status(200).json(res.locals.orgId);
});

router.post("/addTodo", todoController.addTodo, (req, res) => {
  res.status(200).json(res.locals.todoId);
});

router.put("/markComplete", todoController.markComplete, (req, res) => {
  res.status(200).json(res.locals.status);
});

router.delete("/deleteTodo",  todoController.deleteTodo, (req, res) => {
  res.status(200).json(res.locals.status);
});

router.put("/assignTodo",  todoController.assignTodo, (req, res) => {
  
});


export default router;
