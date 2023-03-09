import { useQuery } from "@tanstack/react-query";
import { Grid, GridItem } from "@chakra-ui/react";

import { getProducts } from "../api/main";
import Product from "../components/main/Product";
import { IProduct } from "../type/product";

const Main = () => {
  const { data: productsData, isLoading } = useQuery(["product"], getProducts);

  return (
    <div>
      <Grid templateColumns={"repeat(3, 1fr)"}>
        {!isLoading &&
          productsData.map((el: IProduct) => (
            <Product key={el.idx} productData={el} />
          ))}
      </Grid>
    </div>
  );
};

export default Main;
