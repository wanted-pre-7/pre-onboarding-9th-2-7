import {
  Box,
  Container,
  Grid,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../api";
import DetailModal from "../components/main/DetailModal";
import Filter from "../components/main/Filter";
import ProductCard from "../components/main/ProductCard";
import { MAX_VALUE, MIN_VALUE } from "../constants/selectValue";
import type { IProduct } from "../types/product";

const Main = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    suspense: true,
  });

  const [index, setIndex] = useState(0);
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([
    MIN_VALUE,
    MAX_VALUE,
  ]);
  const [spaceCategory, setSpaceCategory] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filteredProducts = products?.filter(
    (product) =>
      [...spaceCategory].includes(product.spaceCategory) &&
      product.price >= minPrice &&
      product.price <= maxPrice,
  );

  const handleClickModal = (idx: number) => {
    setIndex(idx);

    onOpen();
  };

  const matchedProduct = products?.find(
    (product) => product.idx === index,
  ) as IProduct;

  return (
    <Container as="section" maxW="1280px" padding="10">
      <Box mb="8">
        {/* <Box display="flex" gap="8"> */}
        <Filter
          maxPrice={maxPrice}
          minPrice={minPrice}
          setPrice={setPrice}
          setSpaces={setSpaceCategory}
          spaces={spaceCategory}
        />
        {/* </Box> */}
      </Box>
      <Grid
        placeItems={{ sm: "center", md: "normal" }}
        templateColumns="repeat(auto-fill, minmax(15rem, 1fr))"
        gap={10}
      >
        {filteredProducts?.length ? (
          filteredProducts?.map((product) => (
            <ProductCard
              key={product.idx}
              product={product}
              handleClickModal={handleClickModal}
            />
          ))
        ) : (
          <Heading fontSize="lg">해당하는 상품이 없습니다.</Heading>
        )}
      </Grid>
      <DetailModal isOpen={isOpen} onClose={onClose} product={matchedProduct} />
    </Container>
  );
};
export default Main;
