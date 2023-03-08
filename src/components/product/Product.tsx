import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { cartActions } from "../../features/cartSlice";
import type { IProduct } from "../../types";
import ProductDetailModal from "./ProductDetailModal";

const Product = ({ product }: { product: IProduct }) => {
  const toast = useToast();

  const cartItems = useAppSelector((state) => state.cart.items);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    const cartItem = cartItems.filter((item) => item.idx === product.idx);

    if (cartItem && cartItem[0]?.quantity == product.maximumPurchases) {
      toast({
        title: "최대 구매 수량을 초과하였습니다.",
        status: "error",
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      dispatch(
        cartActions.addItemToCart({
          idx: product.idx,
          price: product.price,
          name: product.name,
          mainImage: product.mainImage,
          description: product.description,
          spaceCategory: product.spaceCategory,
          maximumPurchases: product.maximumPurchases,
          registrationDate: product.registrationDate,
        }),
      );
      toast({
        title: "장바구니에 추가하였습니다.",
        status: "success",
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <VStack alignItems={"flex-start"}>
        <Box mb={3}>
          <Box overflow={"hidden"} rounded="2xl">
            <Image
              objectFit={"cover"}
              boxSize="400px"
              src={product.mainImage}
            />
          </Box>
          <Badge colorScheme="blue">{product.spaceCategory}</Badge>
          <Text display={"block"} as="b" noOfLines={1} fontSize="lg">
            [{product.idx}] {product.name}
          </Text>
          <Text align="right" fontSize={"xl"} color="blue.600">
            {product.price}원
          </Text>
          <HStack>
            <Button width="100%" rounded="2xl" onClick={onOpen}>
              상품 정보
            </Button>
            <Button
              onClick={addToCartHandler}
              colorScheme="blue"
              width="100%"
              rounded="2xl"
            >
              예약
            </Button>
          </HStack>
        </Box>
      </VStack>
      <ProductDetailModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default Product;
