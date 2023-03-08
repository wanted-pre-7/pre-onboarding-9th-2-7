import { Container, Grid, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../api";
import DetailModal from "../components/main/DetailModal";
import ProductCard from "../components/main/ProductCard";
import type { IProduct } from "../types/product";

const Main = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    suspense: true,
  });

  const [index, setIndex] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClickModal = (idx: number) => {
    setIndex(idx);

    onOpen();
  };

  const matchedProduct = products?.find(
    (product) => product.idx === index,
  ) as IProduct;

  return (
    <Container maxW="780px" padding="10">
      <Grid
        // columns={{ sm: 1, md: 2 }}
        // spacing={{ sm: "8", md: "10" }}
        // placeItems="center"
        templateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
        gap={10}
      >
        {products?.map((product) => (
          <ProductCard
            key={product.idx}
            product={product}
            handleClickModal={handleClickModal}
          />
        ))}
      </Grid>
      <DetailModal isOpen={isOpen} onClose={onClose} product={matchedProduct} />
    </Container>
  );
};
export default Main;
