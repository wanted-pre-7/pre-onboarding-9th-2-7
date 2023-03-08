import { Center } from "@chakra-ui/react";
import React, { useState } from "react";

import productApis from "../apis/product";
import ProductItem from "../components/main/ProductItem";
const Main = () => {
  const { data: productList } = productApis.ReadProducts();
  const [isModalOpen, setIsModalOpen] = useState();
  return (
    <>
      <Center
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={5}
        maxW="70vw"
        mx="auto"
        mt="5vh"
      >
        {React.Children.toArray(
          productList?.map((product) => <ProductItem product={product} />),
        )}
      </Center>
    </>
  );
};

export default Main;
