import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/'
    : 'https://your-hosted-api-url/api/test';

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
