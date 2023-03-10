import {
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { addItem } from "../../app/cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import type { IProducts } from "../../pages/Main";
import ProductModal from "./ProductModal";

const ProductCard = (product: IProducts) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const toast = useToast();
  const isExistItem = cartItems.find((item) => item.idx === product.idx);

  const handleReservation = () => {
    if (!isExistItem) {
      toast({
        title: `${product.name}을 장바구니에 담았습니다.`,
        status: "success",
        position: "top",
      });

      const add = { ...product, quantity: 1 };
      dispatch(addItem(add));
    }
  };

  return (
    <>
      {isModalOpen && (
        <ProductModal
          product={product}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <Card
        shadow="none"
        minH="300px"
        maxH="400px"
        marginBottom="24px"
        cursor="pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <CardBody>
          <Image
            src={product.mainImage}
            alt="Product image"
            borderRadius="md"
          />
          <Stack mt="2" padding="1">
            <Flex flexDirection="column">
              <Text fontSize="md" fontWeight="500">
                [{product.idx}] {product.name}
              </Text>
              <Text fontSize="sm" color="grey">
                #{product.spaceCategory}
              </Text>
            </Flex>

            <Flex align="center" justifyContent="space-between">
              <Text fontSize="md" fontWeight="500">
                ₩ {product.price.toLocaleString()}원
              </Text>
              <Button
                fontWeight="500"
                isDisabled={!!isExistItem}
                onClick={(event) => {
                  handleReservation();
                  event.stopPropagation();
                }}
              >
                {isExistItem ? "예약완료" : "예약하기"}
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
