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
} from "@chakra-ui/react";
import { useAppDispatch } from "../app/hook";
import { deleteItem } from "../features/cartSlice";
import type { IStateType } from "../features/cartSlice";

type PropsType = {
  product: IStateType;
};

const Item = ({ product }: PropsType) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(deleteItem(product.idx));
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt="10px"
      maxW="450px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={product?.mainImage}
        alt={product?.mainImage}
      />
      <Stack>
        <CardBody>
          <Text py="2" fontSize="12px" color="gray.600">
            상품 번호 {product?.idx}
          </Text>
          <Heading fontSize="25px" fontWeight="black">
            {product?.name}
          </Heading>
          <Text py="2">{product?.description}</Text>
          <Text fontSize="25px" fontWeight="black" color="cyan.800">
            {product?.price.toLocaleString("ko-kr")}원
          </Text>
          <Text fontSize="12px" color="red.500">
            1인 최대 구매 수량 {product?.maximumPurchases}
          </Text>
        </CardBody>
        <CardFooter display="flex" gap="10px">
          <NumberInput
            w="90px"
            defaultValue={product?.cnt}
            min={1}
            max={product?.maximumPurchases}
            focusBorderColor="gray.200"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button onClick={handleClick}>삭제</Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Item;
