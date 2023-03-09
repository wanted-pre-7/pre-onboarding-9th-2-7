import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  HStack,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { listProduct } from "../api";
import Product from "../components/product/Product";
import type { IProduct } from "../types";

interface IFilter {
  minPrice: unknown;
  maxPrice: unknown;
  space: string;
}

const Home = () => {
  const toast = useToast();
  const [filters, setFilters] = useState<IFilter>({
    minPrice: 0,
    maxPrice: "",
    space: "",
  });
  const { isLoading, data } = useQuery(["products", filters], listProduct, {
    select: (data) => {
      return data.filter((product: IProduct) => {
        return (
          product.spaceCategory.includes(filters.space) &&
          product.price >= Number(filters.minPrice || 0) &&
          (filters.maxPrice ? product.price <= Number(filters.maxPrice) : true)
        );
      });
    },
  });

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);
  const spaceRef = useRef<HTMLInputElement>(null);

  const onFilters = () => {
    const minPrice = minPriceRef.current?.value;
    const maxPrice = maxPriceRef.current?.value;
    const space = spaceRef.current?.value || "";

    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
      toast({
        title: "가격 범위가 잘못되었습니다.",
        status: "error",
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      setFilters({
        minPrice,
        maxPrice,
        space,
      });
    }
  };

  return (
    <Box>
      <HStack mt="5">
        <Text ml="20" as="b">
          가격 :{" "}
        </Text>
        <NumberInput defaultValue={0} step={1000} min={0}>
          <NumberInputField size={4} ref={minPriceRef} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text ml="20" as="b">
          ~
        </Text>
        <NumberInput step={1000} min={0}>
          <NumberInputField size={4} ref={maxPriceRef} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Box>
          <Text ml="5" as="b">
            공간 :{" "}
          </Text>
          <Input htmlSize={4} width="auto" ref={spaceRef} />
        </Box>
        <Box>
          <IconButton
            ml="5"
            onClick={onFilters}
            aria-label="filter product"
            icon={<SearchIcon />}
          />
        </Box>
      </HStack>

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
    </Box>
  );
};

export default Home;
