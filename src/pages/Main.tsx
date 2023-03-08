import { Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import productApis from "../apis/product";
import type { IProduct } from "../apis/product";
import { addProduct } from "../components/features/productSlice";
import ProductItem from "../components/main/ProductItem";
import ProductModal from "../components/main/ProductModal";
const Main = () => {
  const { data: productList } = productApis.ReadProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const hadleOpenModal = (product: IProduct) => {
    dispatch(addProduct(product));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
          productList?.map((product) => (
            <ProductItem product={product} handleOpenModal={hadleOpenModal} />
          )),
        )}
      </Center>
      {isModalOpen && <ProductModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Main;
