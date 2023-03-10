import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "../../app/hook";
import { cartActions } from "../../features/cartSlice";
import type { ICartItem } from "../../features/cartSlice";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const toast = useToast();
  const [value, setValue] = useState<number>(cartItem.quantity);
  const dispatch = useAppDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(cartItem.idx));
  };

  const handleChange = (val: number) => {
    if (val < 1) val = 1;

    if (cartItem.maximumPurchases < val) {
      toast({
        title: "최대 구매 수량을 초과하였습니다.",
        status: "error",
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      setValue(val);
      dispatch(cartActions.updateItem({ ...cartItem, quantity: val }));
    }
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt="2"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={cartItem.mainImage}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Text py="2" size="sm">
            상품 번호 {cartItem.idx}
          </Text>
          <Heading size="md">{cartItem.name}</Heading>

          <Text py="2">{cartItem.description}</Text>

          <Text color={"red"} size="sm">
            1인 최대 구매 수량 {cartItem?.maximumPurchases}
          </Text>
          <Text color={"#086F83"} fontWeight="black" fontSize={"2xl"}>
            {cartItem.totalPrice} 원
          </Text>
        </CardBody>

        <CardFooter>
          <NumberInput
            onChange={(valueString) => handleChange(parseInt(valueString))}
            w="90px"
            defaultValue={value}
            min={1}
            max={cartItem?.maximumPurchases}
            focusBorderColor="gray.200"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            onClick={removeHandler}
            ml="5"
            variant="solid"
            colorScheme="red"
          >
            삭제
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartItem;
