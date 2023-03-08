import { Center } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import productApis from "../apis/product";
import type { IProduct } from "../apis/product";
import { addProduct } from "../components/features/productSlice";
import Layout from "../components/layout/Layout";
import MainHeader from "../components/main/MainHeader";
import ProductItem from "../components/main/ProductItem";
import ProductModal from "../components/main/ProductModal";
import useInput from "../hooks/useInput";
import filterRange from "../utils/filterRange";

const initialValue = {
  min: "",
  max: "",
  location: "",
};

const Main = () => {
  const { data: productList } = productApis.ReadProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    value: filter,
    onChange: handleChangeFilter,
    reset: handleReset,
  } = useInput(initialValue);
  const dispatch = useDispatch();

  const filterProductList = useMemo(() => {
    if (!productList) return [];
    const { min, max, location } = filter;
    if (!min && !max && !location) return productList;
    return productList.filter((product) => {
      const { price, spaceCategory } = product;
      return filterRange({ min, max, location, price, spaceCategory });
    });
  }, [productList, filter]);

  const hadleOpenModal = (product: IProduct) => {
    dispatch(addProduct(product));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <MainHeader
        filter={filter}
        handleChangeFilter={handleChangeFilter}
        handleReset={handleReset}
        totalPrice={1000}
      />
      <Center
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={5}
      >
        {React.Children.toArray(
          filterProductList?.map((product) => (
            <ProductItem product={product} handleOpenModal={hadleOpenModal} />
          )),
        )}
      </Center>
      <>{isModalOpen && <ProductModal handleCloseModal={handleCloseModal} />}</>
    </Layout>
  );
};

export default Main;
