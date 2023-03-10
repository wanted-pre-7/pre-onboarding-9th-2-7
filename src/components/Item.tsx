import {
  Button,
  Card,
  CardBody,
  Flex,
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
import styled from "@emotion/styled";
import { useState } from "react";
import { useAppDispatch } from "../app/hook";
import fallback from "../assets/images/fallback.jpg";
import { deleteItem, updateItem } from "../features/cartSlice";
import type { ICartStateType } from "../features/cartSlice";
import theme from "../utils/theme";

type PropsType = {
  product: ICartStateType;
};

const MAXIMUM_PURCHASES_ERROR_MESSAGE = "최대 구매 수량을 초과하였습니다.";

const Item = ({ product }: PropsType) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(product?.qty);
  const toast = useToast();
  const handleClick = () => {
    dispatch(deleteItem(product.idx));

    toast({
      title: "성공적으로 삭제되었습니다.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  const handleChange = (val: number) => {
    if (!val || val < 1) val = 1;

    if (product.maximumPurchases < val) {
      toast({
        title: MAXIMUM_PURCHASES_ERROR_MESSAGE,
        status: "error",
        isClosable: true,
        position: "top",
      });
    } else {
      setValue(val);
      dispatch(updateItem({ ...product, qty: val }));
    }
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
        alt={product?.name}
        fallbackSrc={fallback}
      />
      <Stack>
        <CardBody minH="320px">
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
          <Wrapper>
            {value === product?.maximumPurchases && (
              <Text color={theme.colors.warn} fontSize={theme.sizes.xs}>
                1인 최대 구매 수량 {product?.maximumPurchases}
              </Text>
            )}
            <Flex gap="10px">
              <NumberInput
                onChange={(valueString) => handleChange(parseInt(valueString))}
                w="90px"
                defaultValue={value}
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
            </Flex>
          </Wrapper>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Item;

const Wrapper = styled.div`
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 50px;
`;
