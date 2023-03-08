import styled from "@emotion/styled";
import List from "../../../data.json";
import type { IProduct } from "../../types";
import Product from "./Product";

const ProductList = () => {
  return (
    <ProductListWrap>
      {List &&
        List.products.map((product: IProduct) => (
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
