import { useAppDispatch, useAppSelector } from "../app/hook";
import { Box, Grid } from "@chakra-ui/react";

import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const { cart } = useAppSelector((state) => state);
  console.log(cart);
  return (
    <div>
      <Grid templateColumns={"repeat(3, 1fr)"}>
        {cart.items.map((el) => (
          <CartItem key={el.idx} cartItem={el} />
        ))}
      </Grid>
      <Box
        p={5}
        fontSize="30"
        fontWeight="bold"
      >{`총 결제액: ${cart.totalPrice.toLocaleString("ko-kr")}원`}</Box>
    </div>
  );
};

export default Cart;
