import {
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  Badge,
  Box,
} from "@chakra-ui/react";
import type { IProductType } from "../types/product";

type PropsType = {
  info: IProductType;
};

const Product = ({ info }: PropsType) => {
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
          <Button variant="solid" colorScheme="cyan">
            예약하기
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Product;
