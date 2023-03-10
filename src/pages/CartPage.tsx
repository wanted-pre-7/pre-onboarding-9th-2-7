import { Center, Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import Item from "../components/Item";
import { addItems } from "../features/cartSlice";
import theme from "../utils/theme";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartSlice);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.qty,
    0,
  );

  useEffect(() => {
    const items = sessionStorage.getItem("cart");
    if (items) dispatch(addItems(JSON.parse(items)));
  }, []);

  return (
    <Center display="flex" flexDir="column" p="20px">
      <Text as="b" fontSize={theme.sizes.xl}>
        장바구니({cartItems.length})
      </Text>
      <Text fontSize={theme.sizes.lg} pb="30px">
        총 결제 금액 <Price>{totalPrice.toLocaleString("ko-kr")}</Price>원
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

const Price = styled.span`
  font-weight: 900;
  color: ${theme.colors.point200};
`;
