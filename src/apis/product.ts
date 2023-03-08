import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

const ReadProducts = () => {
  return useQuery<IProduct[]>(
    ["products"],
    async () => {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  );
};

const productApis = { ReadProducts };
export default productApis;
