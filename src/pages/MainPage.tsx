import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Product from '../components/Product';
import useProductsQuery from '../query/useProductsQuery';

const MainPage = () => {
  const { data, isError, error, isSuccess } = useProductsQuery();
  const [spaceList, setSpaceList] = useState<string[]>([]);
  const [spaces, setSpaces] = useState<string[]>([]);
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([0, 30000]);
  useEffect(() => {
    const setSpace = [
      ...new Set(data?.data.map((product) => product.spaceCategory)),
    ];
    setSpaces(setSpace ?? []);
    setSpaceList(setSpace ?? []);
  }, [isSuccess]);

  if (isError) {
    return <h2>{Object(error).message}</h2>;
  }

  const products = data?.data.filter(
    (item) =>
      spaces.includes(item.spaceCategory) &&
      item.price >= minPrice &&
      item.price <= maxPrice,
  );

  return (
    <Box w="80%" m="auto" p="30px" color="gray.800">
      <Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setPrice={setPrice}
        spaceList={spaceList}
        spaces={spaces}
        setSpaces={setSpaces}
      />
      <Box mt="20px">
        <Text fontSize="20px" as="b">
          상품 ({products?.length})
        </Text>
        {products?.length ? (
          <SimpleGrid w="100%" minChildWidth="200px" spacing="20px" mt="10px">
            {products.map((item) => (
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
