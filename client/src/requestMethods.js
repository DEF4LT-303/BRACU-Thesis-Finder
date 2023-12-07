import axios from 'axios';

const BASE_URL = process.env.EXPRESS_API_URL || 'http://localhost:5000/api/';

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = () => {
  const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const TOKEN = currentUser?.accessToken;

  return axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
};
