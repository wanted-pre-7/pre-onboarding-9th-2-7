import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IProduct } from "../types/product";

const SERVER_URL = "http://localhost:3000";

const ReadProducts = () => {
  return useQuery<IProduct[]>(
    ["products"],
    async () => {
      const response = await axios.get(`${SERVER_URL}/products`);
      return response.data;
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
      suspense: true,
    },
  );
};

const productApis = {
  ReadProducts,
};
export default productApis;
