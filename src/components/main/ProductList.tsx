import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getProductList } from "../../api/main";
import type { IProduct } from "../../types";
import Product from "./Product";

const ProductList = () => {
  const {
    status,
    data: List,
    error,
  } = useQuery(["productList"], () => getProductList);

  if (status === "loading") {
    return <h1>로딩중...</h1>;
  }

  if (error instanceof AxiosError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <ProductListWrap>
      {List.map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </ProductListWrap>
  );
};

const ProductListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export default ProductList;
