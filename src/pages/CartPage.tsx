import { Button, Center, Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import Item from "../components/Item";
import { addItems } from "../features/cartSlice";
import getTotalPrice from "../utils/getTotalPrice";
import theme from "../utils/theme";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartSlice);

  const totalPrice = getTotalPrice(cartItems);

  useEffect(() => {
    const items = sessionStorage.getItem("cart");
    if (items) dispatch(addItems(JSON.parse(items)));
  }, []);

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

const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
  color: ${theme.colors.main400};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Price = styled.span`
  font-weight: 900;
  color: ${theme.colors.point200};
`;
