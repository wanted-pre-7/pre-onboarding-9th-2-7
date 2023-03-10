import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Layout from "../components/Main/Layout";
import ProductCard from "../components/Main/ProductCard";

export interface IProducts {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

const Main = () => {
  const { isLoading, isFetching, data } = useQuery<IProducts[]>(
    ["products"],
    () => fetchProducts(),
    {
      staleTime: Infinity,
    },
  );

  return (
    <>
      {(isLoading || isFetching) && <LoadingSpinner />}
      <Layout>
        {data?.map((product) => (
          <ProductCard key={product.idx} {...product} />
        ))}
      </Layout>
    </>
  );
};

export default Main;
