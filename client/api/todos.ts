import axios from 'axios';

export const getTodos = async (orgId: number) => {
  try {
    const response = await axios.get(`todoAPI/getTodos/${orgId}`);
    console.log("getTasksResponse", response.data)
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const createOrg = async (orgName, userId) => {
  try {
    const response = await axios.post(`todoAPI/createOrg`, {orgName});
    console.log("createOrgResponse", response.data)
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const addTodo = async (todo: string, orgId: number, userId: number) => {
  try {
    const response = await axios.post(`todoAPI/addTodo`, {todo, orgId, userId});
    console.log("addTaskResponse", response.data)
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const markComplete = async (todoId: number, complete: boolean) => {
  try {
    const response = await axios.put(`todoAPI/markComplete`, {todoId, complete});
    console.log("markAsComplete", response.data)
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const deleteTodo = async (todoId: number) => {
  try {
    const response = await axios.delete(`todoAPI/deleteTodo/${todoId}`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const assignTodo = async (todoId: number, userId: number) => {
  try {
    const response = await axios.put(`todoAPI/assignTodo`, {todoId, userId});
    return response.data;
  } catch (error: any) {
    return error;
  }
};