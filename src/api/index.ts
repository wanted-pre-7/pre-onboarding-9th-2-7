import type { AxiosResponse } from "axios";
import axios from "axios";
import type { IProduct } from "../types/product";

const client = axios.create({
  baseURL: "http://localhost:3000/products",
});

export const getProducts = async () => {
  const { data }: AxiosResponse<IProduct[]> = await client({ method: "get" });

  return data;
};
