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
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../app/hook";

import { addCartItem } from "../features/cartSlice";
import { IProduct } from "../type/product";

interface Props {
  productsData: IProduct;
}

const Product = ({ productsData }: Props) => {
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const toast = useToast();
  console.log(cart);

  const handleClickAddCart = () => {
    dispatch(addCartItem(productsData));
    toast({
      description: "장바구니에 담겼습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={productsData.mainImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{`${productsData.idx}. ${productsData.name}`}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {`${productsData.price.toLocaleString("ko-KR")}원`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            상세정보
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => dispatch(handleClickAddCart)}
          >
            장바구니 담기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Product;
