import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../app/hook";
import CartItem from "../components/cart/CartItem";

const Reservations = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Center>
      <Box w="70%" mt="10">
        <Heading mb="5">장바구니</Heading>
        {cart.totalQuantity == 0 ? (
          <Box minH="200" backgroundColor={"gray.100"}>
            <Center>
              <Text mt="75">장바구니가 비어있습니다.</Text>
            </Center>
          </Box>
        ) : (
          <Box minH="200" borderColor="black">
            {cart.items.map((item) => (
              <CartItem key={item.idx} cartItem={item} />
            ))}
          </Box>
        )}

        <Text mt="5" align="right" fontSize={"2xl"} color="blue.600">
          Total : {cart.totalPrice} 원
        </Text>
      </Box>
    </Center>
  );
};

export default Reservations;
