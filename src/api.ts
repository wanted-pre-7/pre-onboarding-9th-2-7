import axios from "axios";

const axiosConfig = {
  timeout: 3000,
  baseURL: import.meta.env.VITE_API_URL,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) alert(response.data.message);
    return Promise.reject(error);
  },
);

export const listProduct = () => {
  return axiosInstance.get("/products").then(({ data }) => data);
};
