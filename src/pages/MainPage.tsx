import { Box, Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import Filter from "../components/Filter";
import Product from "../components/Product";
import useProductsQuery from "../query/useProductsQuery";

const MainPage = () => {
  const { data, isFetching, isLoading } = useProductsQuery();
  const [spaces, setSpaces] = useState<string[]>([]);
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([0, 30000]);

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
      <Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setPrice={setPrice}
        spaces={spaces}
        setSpaces={setSpaces}
      />
      <Box mt="20px">
        <Text fontSize="20px" as="b">
          상품 ({products?.length})
        </Text>
        {products?.length ? (
          <SimpleGrid w="100%" minChildWidth="200px" spacing="20px" mt="10px">
            {products?.map((item) => (
              <Product key={item.idx} info={item} />
            ))}
          </SimpleGrid>
        ) : (
          <Container centerContent>해당하는 상품이 없습니다.</Container>
        )}
      </Box>
    </Box>
  );
};

export default MainPage;
