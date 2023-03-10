import { Button, Center, Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import Item from "../components/Item";
import getTotalPrice from "../utils/getTotalPrice";
import theme from "../utils/theme";

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cartSlice);

  const totalPrice = getTotalPrice(cartItems);

  const handleClick = () => navigate("/main");

  return (
    <Center display="flex" flexDir="column" p="20px">
      <Text as="b" fontSize={theme.sizes.xl} pt="80px">
        장바구니({cartItems.length})
      </Text>
      <Text fontSize={theme.sizes.lg} pb="30px">
        총 결제 금액 <Price>{totalPrice.toLocaleString("ko-kr")}</Price>원
      </Text>
      {cartItems.map((item) => (
        <Item key={item.idx} product={item} />
      ))}
      {!cartItems.length && (
        <Container centerContent pt="30px">
          장바구니에 상품이 없습니다.
          <Button
            onClick={handleClick}
            mt="20px"
            colorScheme="cyan"
            variant="outline"
          >
            여행 상품 보기
          </Button>
        </Container>
      )}
    </Center>
  );
};

export default CartPage;

const Price = styled.span`
  font-weight: 900;
  color: ${theme.colors.point200};
`;
