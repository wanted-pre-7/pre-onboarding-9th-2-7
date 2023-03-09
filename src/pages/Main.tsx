import { useQuery } from "@tanstack/react-query";
import { Grid, NumberInput, NumberInputField, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { getProducts } from "../api/main";
import Product from "../components/main/Product";
import Filter from "../components/main/Filter";
import type { IProduct } from "../type/product";

const Main = () => {
  const { data: productsData, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    suspense: true,
  });
  const [[minPrice, maxPrice], setPrice] = useState<number[]>([0, 30000]);
  const [space, setSpace] = useState<string[]>([
    "서울",
    "강원",
    "대구",
    "부산",
    "제주",
  ]);

  const filteredItems = productsData?.filter((el: IProduct) => {
    return (
      space.includes(el.spaceCategory) &&
      maxPrice >= el.price &&
      minPrice <= el.price
    );
  });
  console.log(filteredItems);

  return (
    <div>
      <Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setPrice={setPrice}
        space={space}
        setSpace={setSpace}
      />
      <Grid templateColumns={"repeat(3, 1fr)"}>
        {filteredItems?.map((el: IProduct) => (
          <Product key={el.idx} productData={el} />
        ))}
      </Grid>
    </div>
  );
};

export default Main;
