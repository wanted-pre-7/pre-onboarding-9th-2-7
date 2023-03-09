import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CloseButton,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../features/cartSlice";
import type { IProduct } from "../../types/product";

interface Props {
  product: IProduct;
}

const ReservationCard = ({ product }: Props) => {
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const dispatch = useAppDispatch();

  const matchedCart = cart.find((item) => item.idx === product.idx);

  const handleClickIncrement = () => {
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
        <Image src={product.mainImage} alt={product.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" wordBreak="keep-all">
            <Text display="inline-block">{product.idx}</Text>. {product.name}
          </Heading>
          <Text
            color="blue.600"
            fontSize="xl"
            display="flex"
            alignItems="center"
            gap="4"
          >
            {product.price.toLocaleString()} 원
            <Badge p="2" borderRadius="md">
              {product.spaceCategory}
            </Badge>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
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
          <Button colorScheme="red" onClick={handleClickRemove}>
            삭제
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default ReservationCard;
