import axios from 'axios';

export const loginOrCreateAccount = async (JWT: string) => {
  try {
    const response = await axios.post(`userAPI/signup`, {JWT});
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

