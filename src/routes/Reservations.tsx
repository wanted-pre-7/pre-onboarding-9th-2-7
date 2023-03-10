import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useAppSelector } from "../app/hook";
import CartItem from "../components/cart/CartItem";
import type { ICartItem } from "../features/cartSlice";

const Reservations = () => {
  const cart = useAppSelector((state) => state.cart);

  const totalPrice = cart
    .map((el) => el.price * el.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <Grid
      mt={10}
      px={{
        base: 20,
        lg: 20,
      }}
      gap={4}
      templateColumns={{
        sm: "1fr",
        md: "1fr",
        lg: "repeat(5, 1fr)",
      }}
    >
      <GridItem
        colSpan={{
          sm: 1,
          md: 1,
          lg: 3,
        }}
      >
        {cart.map((item: ICartItem) => (
          <CartItem key={item.idx} cartItem={item} />
        ))}
      </GridItem>
      <GridItem
        colStart={{
          sm: 1,
          md: 1,
          lg: 5,
        }}
      >
        <Text fontSize="2xl" as="b">
          총 상품금액 :{" "}
        </Text>
        <Text fontSize="2xl" as="b">
          {totalPrice} 원
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Reservations;
