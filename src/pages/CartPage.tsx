import { Center, Container, Text } from '@chakra-ui/react';
import { useAppSelector } from '../app/hook';
import Item from '../components/Item';

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cartSlice);

  const totalPrice = cartItems
    .map((el) => el.price * el.cnt)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <Center display="flex" flexDir="column" p="20px">
      <Text fontSize="30px" as="b" boxSizing="border-box">
        장바구니
      </Text>
      <Text fontSize="20px" pb="30px">
        총 결제 금액 {totalPrice.toLocaleString('ko-kr')}원
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
