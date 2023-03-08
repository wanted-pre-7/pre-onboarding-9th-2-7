import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: "http://localhost:3000",
};
const axiosInstance = axios.create(axiosConfig);

const token = localStorage.getItem("token");

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
