import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import type { IProduct } from "../../types";
import ProductDetailModal from "./ProductDetailModal";

const Product = ({ product }: { product: IProduct }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <VStack alignItems={"flex-start"}>
        <Box mb={3}>
          <Box overflow={"hidden"} rounded="2xl">
            <Image
              objectFit={"cover"}
              boxSize="400px"
              src={product.mainImage}
            />
          </Box>
          <Badge colorScheme="blue">{product.spaceCategory}</Badge>
          <Text display={"block"} as="b" noOfLines={1} fontSize="lg">
            [{product.idx}] {product.name}
          </Text>
          <Text align="right" fontSize={"xl"} color="blue.600">
            {product.price}원
          </Text>
          <HStack>
            <Button width="100%" rounded="2xl" onClick={onOpen}>
              상품 정보
            </Button>
            <Button colorScheme="blue" width="100%" rounded="2xl">
              예약
            </Button>
          </HStack>
        </Box>
      </VStack>
      <ProductDetailModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default Product;
