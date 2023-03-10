import { Grid, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import useProductsQuery from "../utils/useProductsQuery";
import theme from "../utils/theme";

const MainPage = () => {
  const { data, isFetching, isLoading } = useProductsQuery();
  const [selectSpaces, setSelectSpaces] = useState<string[]>([]);
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([0, 30000]);

  const spaceList = useMemo(() => {
    const spaceCategory = data?.data.map((product) => product.spaceCategory);
    const set = new Set(spaceCategory);
    return [...set];
  }, [data]);

  const products = data?.data.filter(
    (item) =>
      selectSpaces.includes(item.spaceCategory) &&
      item.price >= minPrice &&
      item.price <= maxPrice,
  );

  if (isLoading || isFetching) return <Loader />;
  return (
    <Container>
      <Text
        fontSize={theme.sizes.xl}
        fontWeight="black"
        textAlign="center"
        p="50px"
      >
        지금 바로 로컬 여행을 떠나보세요!
      </Text>
      <Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectSpaces={selectSpaces}
        spaceList={spaceList}
        setPrice={setPrice}
        setSelectSpaces={setSelectSpaces}
      />
      <Wrapper>
        <Text as="b" fontSize={theme.sizes.lg}>
          예약 가능한 상품({products?.length})
        </Text>
        {products?.length ? (
          <Grid
            mt="5"
            gap={4}
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
          >
            {products?.map((item) => (
              <Card key={item.idx} product={item} />
            ))}
          </Grid>
        ) : (
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
  width: 100%;
  margin-top: 30px;
`;
