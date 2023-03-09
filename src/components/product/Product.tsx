import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { cartActions } from "../../features/cartSlice";
import type { IProduct } from "../../types";
import ProductDetailModal from "./ProductDetailModal";

const Product = ({ product }: { product: IProduct }) => {
  const toast = useToast();

  const cartItems = useAppSelector((state) => state.cart.items);
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
    <Box
      minW="200px"
      border="1px"
      borderRadius="4px"
      borderColor="gray.100"
      overflow="hidden"
    >
      <ProductDetailModal isOpen={isOpen} onClose={onClose} product={product} />
      <Image w="100%" src={product?.mainImage} alt={product?.name} />
      <Box p="8px" cursor="pointer">
        <Badge borderRadius="full" px="2" colorScheme="cyan">
          {product?.spaceCategory}
        </Badge>
        <Box display="flex" flexDir="column" mt="10px" minH="100px">
          <Text color="gray.600" fontSize="12px">
            상품 번호 {product?.idx}
          </Text>
          <Text color="gray.800" fontSize="18px" fontWeight="black">
            {product?.name}
          </Text>
          <Text color="cyan.800" fontSize="18px" fontWeight="black">
            {product?.price.toLocaleString("ko-kr")}원
          </Text>
        </Box>
        <Divider my="15px" />
        <ButtonGroup display="flex" justifyContent="center" spacing="2">
          <Button variant="outline" colorScheme="cyan" onClick={onOpen}>
            자세히
          </Button>
          {isReservated ? (
            <Button variant="solid" disabled>
              예약완료
            </Button>
          ) : (
            <Button
              variant="solid"
              colorScheme="cyan"
              onClick={addToCartHandler}
            >
              예약하기
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Product;
