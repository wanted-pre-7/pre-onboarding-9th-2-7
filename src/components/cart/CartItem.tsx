import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../app/hook";
import { cartActions } from "../../features/cartSlice";
import type { ICartItem } from "../../features/cartSlice";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const toast = useToast();
  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(cartItem.idx));
  };
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(cartItem.idx));
  };

  const addItemHandler = () => {
    if (cartItem.maximumPurchases == cartItem.quantity) {
      toast({
        title: "최대 구매 수량을 초과하였습니다.",
        status: "error",
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      dispatch(
        cartActions.addItemToCart({
          idx: cartItem.idx,
          price: cartItem.price,
          name: cartItem.name,
          mainImage: cartItem.mainImage,
          description: cartItem.description,
          spaceCategory: cartItem.spaceCategory,
          maximumPurchases: cartItem.maximumPurchases,
          registrationDate: cartItem.registrationDate,
        }),
      );
    }
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={cartItem.mainImage}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{cartItem.name}</Heading>

          <Text py="2">{cartItem.description}</Text>
        </CardBody>

        <CardFooter>
          <Text mr="5" fontSize={"xl"} color="blue.600">
            {cartItem.totalPrice} 원
          </Text>

          <Button mr="5" onClick={addItemHandler}>
            +
          </Button>
          <span>{cartItem.quantity}</span>
          <Button ml="5" onClick={removeItemHandler}>
            -
          </Button>
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
