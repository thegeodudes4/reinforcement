import express from "express";
import userController from "../controllers/userController";
import todoController from "../controllers/todoController";

const router = express.Router();
// signup route
router.get("/getTodos/:orgId", userController.verifyJWT, todoController.getTodos,  (req, res) => {
  res.status(200).json(res.locals.todoList);
});

router.post("/createOrg",userController.verifyJWT, todoController.createOrg, (req, res) => {
  res.status(200).json(res.locals.orgId);
});

router.post("/addTodo",userController.verifyJWT, todoController.addTodo, (req, res) => {
  res.status(200).json(res.locals.todoId);
});

router.put("/markComplete",userController.verifyJWT, todoController.markComplete, (req, res) => {
  res.status(200).json(res.locals.status);
});

router.delete("/deleteTodo",  userController.verifyJWT,todoController.deleteTodo, (req, res) => {
  res.status(200).json(res.locals.status);
});

router.put("/assignTodo",userController.verifyJWT,  todoController.assignTodo, (req, res) => {
  
});


export default router;
