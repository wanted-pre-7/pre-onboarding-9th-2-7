import {
  Box,
  Container,
  Grid,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { getProducts } from "../api";
import DetailModal from "../components/main/DetailModal";
import ProductCard from "../components/main/ProductCard";
import { PRICE_VALUE, SPACE_VALUE } from "../constants/selectValue";
import type { IProduct } from "../types/product";

const Main = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    suspense: true,
  });
  const maxValue = Math.max(...PRICE_VALUE);
  const minValue = Math.min(...PRICE_VALUE);

  const [index, setIndex] = useState(0);
  const [currValues, setCurrValues] = useState([minValue, maxValue]);
  const [spaceCategory, setSpaceCategory] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickModal = (idx: number) => {
    setIndex(idx);

    onOpen();
  };

  const matchedProduct = products?.find(
    (product) => product.idx === index,
  ) as IProduct;

  const handleChangePrice = (value: number[]) => {
    setCurrValues(value);
  };
  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSpaceCategory(e.target.value);
  };
  const filteredProducts = products?.filter((product: IProduct) => {
    const [currMin, currMax] = currValues;
    if (spaceCategory === "") {
      return product.price >= currMin && product.price <= currMax;
    } else {
      return (
        product.price >= currMin &&
        product.price <= currMax &&
        product.spaceCategory === spaceCategory
      );
    }
  });
  return (
    <Container as="section" maxW="1280px" padding="10">
      <Box mb="8" display="flex" justifyContent="space-between" gap={4}>
        <Box display="flex" gap="8">
          <Box>
            <RangeSlider
              aria-label={["min", "max"]}
              defaultValue={currValues}
              min={minValue}
              max={maxValue}
              step={1000}
              onChange={handleChangePrice}
              w="300px"
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} boxSize={6} />
              <RangeSliderThumb index={1} boxSize={6} />
            </RangeSlider>
            <Box>
              {currValues[0].toLocaleString()}~{currValues[1].toLocaleString()}
              원
            </Box>
          </Box>

          <Select
            placeholder="지역"
            onChange={handleChangeCategory}
            width="100px"
          >
            {SPACE_VALUE.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </Select>
        </Box>
      </Box>
      <Grid
        placeItems={{ sm: "center", md: "normal" }}
        templateColumns="repeat(auto-fill, minmax(15rem, 1fr))"
        gap={10}
      >
        {filteredProducts?.map((product) => (
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
