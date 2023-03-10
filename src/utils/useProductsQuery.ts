import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { getProducts } from "../api/apis";
import type { IProductType } from "../types/product";

const useProductsQuery = () => {
  return useQuery<AxiosResponse<IProductType[]>>(
    ["products"],
    () => getProducts(),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );
};

export default useProductsQuery;
