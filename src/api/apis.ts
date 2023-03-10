import axiosInstance from "./instance";

export const getProducts = async () => await axiosInstance.get("/products");
