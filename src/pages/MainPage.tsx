import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../apis/main';
import type { IProduct } from '../components/Product';
import Product from '../components/Product';

const MainPage = () => {
  const { data, isLoading, isError, error } = useQuery(
    ['productData'],
    () => getProduct,
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{Object(error).message}</h2>;
  }

  return data.map((product: IProduct) => (
    <Product key={product.idx} product={product} />
  ));
};

export default MainPage;
