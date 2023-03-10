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

  const cartItems = useAppSelector((state) => state.cart);
  const isReservated = cartItems.find((list) => list.idx === product.idx);

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
          ...product,
          quantity: 1,
          totalPrice: product.price,
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
    <VStack alignItems={"flex-start"}>
      <ProductDetailModal isOpen={isOpen} onClose={onClose} product={product} />
      <Box mb={3} borderWidth="0.5px">
        <Image
          objectFit={"cover"}
          boxSize="400px"
          src={product?.mainImage}
          alt={product?.name}
        />
        <Box padding={5}>
          <Badge colorScheme="blue">{product.spaceCategory}</Badge>
          <Text color="gray.600" fontSize="12px">
            상품 번호 {product?.idx}
          </Text>
          <Text color="gray.800" fontSize="18px" fontWeight="black">
            {product?.name}
          </Text>
          <Text color="cyan.800" fontSize="18px" fontWeight="black">
            {product?.price.toLocaleString("ko-kr")}원
          </Text>
          <HStack mt="5">
            <Button width="100%" rounded="2xl" onClick={onOpen}>
              자세히
            </Button>
            {isReservated ? (
              <Button width="100%" rounded="2xl" disabled>
                예약완료
              </Button>
            ) : (
              <Button
                onClick={addToCartHandler}
                colorScheme="blue"
                width="100%"
                rounded="2xl"
              >
                예약하기
              </Button>
            )}
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default Product;
