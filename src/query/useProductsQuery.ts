import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { getProducts } from '../apis/main';
import type { IProductType } from '../types/product';

const useProductsQuery = () => {
  return useQuery<AxiosResponse<IProductType[]>>(
    ['products'],
    () => getProducts(),
    {
      refetchOnWindowFocus: false,
    },
  );
};

export default useProductsQuery;
