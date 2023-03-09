import { useQuery } from '@tanstack/react-query';
import { client } from './instance';

export const getProducts = () => client.get('/products');

export const useGetOriginProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    suspense: true,
  });
};
