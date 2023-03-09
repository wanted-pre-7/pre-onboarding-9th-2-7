import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/main";
import Product from "../components/main/Product";
import { IProduct } from "../type/product";

const Main = () => {
  const { data: productsData, isLoading } = useQuery(["product"], getProducts);

  return (
    <div>
      {!isLoading &&
        productsData.map((el: IProduct) => (
          <Product key={el.idx} productData={el} />
        ))}
    </div>
  );
};

export default Main;
