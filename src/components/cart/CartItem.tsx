import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  Badge,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../app/hook";
import {
  addCartItem,
  removeCartItem,
  decreaseQuantity,
} from "../../features/cartSlice";

import type { IcartItem } from "../../features/cartSlice";

const CartItem = ({ cartItem }: { cartItem: IcartItem }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={cartItem.mainImage}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex>
              <Heading size="md">{`${cartItem.idx}. ${cartItem.name}`}</Heading>
              <Badge ml="1" fontSize="0.8em">
                {cartItem.spaceCategory}
              </Badge>
            </Flex>
          </Stack>
          <NumberInput
            defaultValue={cartItem.quantity}
            min={1}
            max={cartItem.maximumPurchases}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper
                onClick={() => {
                  cartItem.maximumPurchases > cartItem.quantity
                    ? dispatch(addCartItem(cartItem))
                    : null;
                }}
              />
              <NumberDecrementStepper
                onClick={() => {
                  cartItem.quantity > 0
                    ? dispatch(decreaseQuantity(cartItem))
                    : null;
                }}
              />
            </NumberInputStepper>
          </NumberInput>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => {
              dispatch(removeCartItem(cartItem));
            }}
          >
            삭제
          </Button>
        </CardBody>
        <Divider />
        <CardFooter>
          <Text color="blue.600" fontSize="2xl">
            {`가격: ${cartItem.priceSum.toLocaleString("ko-KR")}원`}
          </Text>
        </CardFooter>
      </Card>
    </>
  );
};

export default CartItem;
