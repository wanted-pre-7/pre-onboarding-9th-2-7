import { SimpleGrid, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import useProductsQuery from "../query/useProductsQuery";
import theme from "../utils/theme";

const MainPage = () => {
  const { data, isFetching, isLoading } = useProductsQuery();
  const [spaceList, setSpacesList] = useState<string[]>([]);
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([0, 30000]);

  const products = data?.data.filter(
    (item) =>
      spaceList.includes(item.spaceCategory) &&
      item.price >= minPrice &&
      item.price <= maxPrice,
  );

  if (isLoading || isFetching) return <Loader />;
  return (
    <Container>
      <Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setPrice={setPrice}
        spaces={spaceList}
        setSpaces={setSpacesList}
      />
      <Wrapper>
        <Text as="b" fontSize={theme.sizes.lg}>
          예약 가능한 상품({products?.length})
        </Text>
        <SimpleGrid w="100%" minChildWidth="200px" spacing="20px" mt="10px">
          {products?.map((item) => (
            <Card key={item.idx} product={item} />
          ))}
        </SimpleGrid>
        {!products?.length && (
          <Text fontSize={theme.sizes.m} textAlign="center" mt="100px">
            예약 가능한 상품이 없습니다.
          </Text>
        )}
      </Wrapper>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
  color: ${theme.colors.main400};
`;

const Wrapper = styled.div`
  margin-top: 30px;
`;
