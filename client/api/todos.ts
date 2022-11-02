import axios from 'axios';

export const getTodos = async () => {
  try {
    const response = await axios.get(`todoAPI/getTodos`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};