import {
  Box,
  Container,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FilterIcon from "../components/common/FilterIcon";
import Filter from "../components/product/Filter";
import Product from "../components/product/Product";
import useProductsQuery from "../query/useProductsQuery";

const Home = () => {
  const [placeList, setPlaceList] = useState<string[]>([]);

  const { data, isFetching, isLoading } = useProductsQuery();
  const [spaces, setSpaces] = useState<string[]>([]);
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (data) {
      const places = data.data.map((product) => product.spaceCategory);
      setPlaceList(() => places);
      setPrice(() => [
        0,
        Math.max(...data.data.map((product) => product.price)),
      ]);
      setSpaces(() => [...new Set(places)]);
    }
  }, [data, setPlaceList, setPrice]);

  const products = data?.data.filter(
    (item) =>
      [...spaces].includes(item.spaceCategory) &&
      item.price >= minPrice &&
      item.price <= maxPrice,
  );

  if (isFetching || isLoading) {
    return (
      <Container
        centerContent
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        z-index="999px"
      >
        <Spinner size="lg" />
      </Container>
    );
  }
  return (
    <Box w="80%" m="auto" p="30px" color="gray.800">
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <IconButton aria-label="Search database" icon={<FilterIcon />} />
        </PopoverTrigger>
        <PopoverContent w="600px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border="0">
            <Text as="b">Filter</Text>
          </PopoverHeader>
          <PopoverBody>
            <Filter
              minPrice={minPrice}
              maxPrice={maxPrice}
              setPrice={setPrice}
              spaces={spaces}
              setSpaces={setSpaces}
              placeList={[...new Set(placeList)]}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Box mt="20px">
        <Text fontSize="20px" as="b">
          상품 ({products?.length})
        </Text>
        {products?.length ? (
          <SimpleGrid w="100%" minChildWidth="200px" spacing="20px" mt="10px">
            {products?.map((item) => (
              <Product key={item.idx} product={item} />
            ))}
          </SimpleGrid>
        ) : (
          <Container centerContent>해당하는 상품이 없습니다.</Container>
        )}
      </Box>
    </Box>
  );
};

export default Home;
