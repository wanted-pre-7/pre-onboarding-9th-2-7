import { Center, Container, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { cartSliceAciton } from '../app/store';
import Item from '../components/Item';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartSlice);

  const totalPrice = cartItems.reduce(
    (acc, cart) => acc + cart.price * cart.cnt,
    0,
  );

  useEffect(() => {
    const items = sessionStorage.getItem('cart');
    if (items) dispatch(cartSliceAciton.getSessionItem(JSON.parse(items)));
  }, []);

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
