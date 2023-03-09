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
import { deleteItem, updateItem } from "../features/cartSlice";
import type { ICartStateType } from "../features/cartSlice";
import { useState } from "react";
import theme from "../utils/theme";

type PropsType = {
  product: ICartStateType;
};

const Item = ({ product }: PropsType) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(1);

  const handleClick = () => {
    dispatch(deleteItem(product.idx));
  };

  const handleChange = (val: number) => {
    setValue(val);
    dispatch(updateItem({ ...product, qty: val }));
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
          <Text py="2" color={theme.colors.main300} fontSize={theme.sizes.xs}>
            상품 번호 {product?.idx}
          </Text>
          <Heading
            color={theme.colors.main400}
            fontSize={theme.sizes.xl}
            fontWeight="black"
          >
            {product?.name}
          </Heading>
          <Text py="2" color={theme.colors.main400}>
            {product?.description}
          </Text>
          <Text
            color={theme.colors.point200}
            fontWeight="black"
            fontSize={theme.sizes.xl}
          >
            {(product?.price * value).toLocaleString("ko-kr")}원
          </Text>
          <Text color={theme.colors.warn} fontSize={theme.sizes.xs}>
            1인 최대 구매 수량 {product?.maximumPurchases}
          </Text>
        </CardBody>
        <CardFooter display="flex" gap="10px">
          <NumberInput
            onChange={(valueString) => handleChange(parseInt(valueString))}
            w="90px"
            defaultValue={1}
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
