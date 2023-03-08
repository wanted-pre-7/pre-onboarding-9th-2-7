import {
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  Badge,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { addItem } from "../features/cartSlice";
import type { IStateType } from "../features/cartSlice";
import type { IProductType } from "../types/product";

type PropsType = {
  info: IProductType;
};

const Product = ({ info }: PropsType) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartSlice);
  const toast = useToast();

  const handleCartClick = () => {
    const isIdx = cartItems.find((item: IStateType) => item.idx === info.idx);
    if (!!isIdx)
      toast({
        title: "이미 장바구니에 추가한 상품입니다.",
        status: "error",
        duration: 3000,
        position: "top",
      });
    else dispatch(addItem({ ...info, cnt: 1 }));
  };

  return (
    <Box
      minW="200px"
      border="1px"
      borderRadius="4px"
      borderColor="gray.100"
      overflow="hidden"
    >
      <Image w="100%" src={info?.mainImage} alt={info?.name} />
      <Box p="8px" cursor="pointer">
        <Badge borderRadius="full" px="2" colorScheme="cyan">
          {info?.spaceCategory}
        </Badge>
        <Box display="flex" flexDir="column" mt="10px" minH="100px">
          <Text color="gray.600" fontSize="12px">
            상품번호 {info?.idx}
          </Text>
          <Text color="gray.800" fontSize="18px" as="b">
            {info?.name}
          </Text>
          <Text color="cyan.800" fontSize="18px" as="b">
            {info?.price.toLocaleString("ko-kr")}원
          </Text>
        </Box>
        <Divider my="15px" />
        <ButtonGroup display="flex" justifyContent="center" spacing="2">
          <Button variant="outline" colorScheme="cyan">
            자세히
          </Button>
          <Button variant="solid" colorScheme="cyan" onClick={handleCartClick}>
            예약하기
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Product;
