import { Badge, Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import type { IProduct } from "../../types";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <VStack alignItems={"flex-start"}>
      <Box overflow={"hidden"} mb={3}>
        <Image objectFit={"cover"} boxSize="400px" src={product.mainImage} />
        <Text display={"block"} as="b" noOfLines={1} fontSize="lg">
          [{product.idx}] {product.name}
          <Badge ml="2" colorScheme="green">
            {product.spaceCategory}
          </Badge>
        </Text>
        <Text fontSize={"sm"} color="gray.600">
          {product.price}원
        </Text>
        <Button width="100%" rounded="2xl">
          예약
        </Button>
      </Box>
    </VStack>
  );
};

export default Product;
