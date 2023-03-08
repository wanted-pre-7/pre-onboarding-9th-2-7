import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { listProduct } from "../api";
import Product from "../components/product/Product";
import type { IProduct } from "../types";

const Home = () => {
  const { isLoading, data } = useQuery(["products"], listProduct);

  return (
    <Grid
      mt={10}
      px={{
        base: 120,
        lg: 20,
      }}
      gap={4}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
    >
      {isLoading ? <></> : null}
      {data?.map((product: IProduct) => (
        <Product key={product.idx} product={product} />
      ))}
    </Grid>
  );
};

export default Home;
