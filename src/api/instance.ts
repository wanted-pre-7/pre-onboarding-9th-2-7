import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: "http://localhost:3000",
};
const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
