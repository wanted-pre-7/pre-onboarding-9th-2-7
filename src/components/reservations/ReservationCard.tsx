import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
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
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  updateItem,
} from "../../features/cartSlice";
import type { ICart } from "../../types/product";

interface Props {
  product: ICart;
}

const ReservationCard = ({ product }: Props) => {
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();
  // const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const matchedCart = cart.find((item) => item.idx === product.idx);

  const handleClickIncrement = () => {
    if (!matchedCart) return;

    if (product.maximumPurchases === matchedCart?.quantity) {
      toast({
        title: `${product.name} 최대 구매 개수 초과`,
        description: `인 당 ${product.maximumPurchases}개만 구매하실 수 있습니다.`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      dispatch(incrementQuantity({ ...product, quantity: 1 }));

      toast({
        title: `장바구니에 추가되었습니다.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };
  const handleClickDecrement = () => {
    if ((matchedCart?.quantity as number) > 1) {
      dispatch(decrementQuantity({ ...product, quantity: 1 }));

      toast({
        title: "성공적으로 삭제되었습니다.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };
  const handleClickRemove = () => {
    dispatch(removeItem(product));

    toast({
      title: "성공적으로 삭제되었습니다.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  // const handleUpdate = (quantity: number) => {
  //   setQuantity(quantity);
  //   if (isNaN(quantity)) {
  //     setQuantity(1);

  //     toast({
  //       title: "성공적으로 삭제되었습니다.",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom-right",
  //     });
  //   }

  //   dispatch(updateItem({ ...product, quantity }));
  // };

  return (
    <Card
      maxW="md"
      key={product.idx}
      _hover={{
        shadow: "md",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "0.3s",
      }}
    >
      <CardBody>
        <Image
          src={product.mainImage}
          alt={product.name}
          borderRadius="lg"
          fallbackSrc="https://media.istockphoto.com/id/1147544807/ko/%EB%B2%A1%ED%84%B0/%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EA%B7%B8%EB%9E%98%ED%94%BD.jpg?s=612x612&w=0&k=20&c=d0Ddt3qdtkhxPvpInjBRzLWFjODlfSh3IkKAB6YZwC8="
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" wordBreak="keep-all">
            <Text display="inline-block">{product.idx}</Text>. {product.name}
          </Heading>
          <Box>
            <Text fontSize="sm" color="red.400">
              1인 최대 구매 수량 {product.maximumPurchases}
            </Text>
          </Box>

          <Text fontSize="xl" display="flex" alignItems="center" gap="4">
            {(product.price * product.quantity).toLocaleString()} 원
            <Badge p="2" borderRadius="md">
              {product.spaceCategory}
            </Badge>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="space-between">
        {/* <NumberInput
          w="90px"
          defaultValue={1}
          min={1}
          max={product.maximumPurchases}
          focusBorderColor="gray.200"
          onChange={(_, valueAsNumber) => handleUpdate(valueAsNumber)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={handleClickIncrement} />
            <NumberDecrementStepper onClick={handleClickDecrement} />
          </NumberInputStepper>
        </NumberInput> */}
        <ButtonGroup spacing="2" display="flex" alignItems="center" gap="1">
          <Button
            variant="outline"
            colorScheme="blue"
            onClick={handleClickIncrement}
          >
            +
          </Button>

          <Box>{product.quantity}</Box>

          <Button
            variant="outline"
            colorScheme="blue"
            onClick={handleClickDecrement}
          >
            -
          </Button>
          <Button onClick={handleClickRemove}>삭제</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default ReservationCard;
