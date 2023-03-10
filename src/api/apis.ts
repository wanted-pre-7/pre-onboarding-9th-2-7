import axiosInstance from "./instance";

export const getProducts = () => axiosInstance({ method: "get" });
