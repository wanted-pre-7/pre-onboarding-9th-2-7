import { Center, Container, Text } from "@chakra-ui/react";
import { useAppSelector } from "../app/hook";
import Item from "../components/Item";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cartSlice);

  return (
    <Center display="flex" flexDir="column" p="20px">
      <Text fontSize="30px" as="b" pb="30px" boxSizing="border-box">
        장바구니
      </Text>
      {cartItems.map((item) => (
        <Item key={item.idx} product={item} />
      ))}
      {!cartItems.length && (
        <Container centerContent>장바구니에 상품이 없습니다.</Container>
      )}
    </Center>
  );
};

export default CartPage;
