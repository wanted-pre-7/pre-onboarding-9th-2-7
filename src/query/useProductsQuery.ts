import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { getProducts } from "../api/apis";
import type { IProduct } from "../types";

const useProductsQuery = () => {
  return useQuery<AxiosResponse<IProduct[]>>(
    ["products"],
    () => getProducts(),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );
};

export default useProductsQuery;
