import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/main";
import Product from "../components/Product";
import { IProduct } from "../type/product";

const Main = () => {
  const { data: productsData, isLoading } = useQuery(["product"], getProducts);
  console.log(productsData, isLoading);
  return (
    <div>
      {!isLoading &&
        productsData.map((el: IProduct) => (
          <Product key={el.idx} productsData={el} />
        ))}
    </div>
  );
};

export default Main;
