import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) alert(response.data.message);
    return Promise.reject(error);
  },
);
