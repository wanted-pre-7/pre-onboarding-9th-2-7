import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { IInitial } from "../../app/cartSlice";
import { deleteItem, minusQuantity, plusQuantity } from "../../app/cartSlice";

import { useAppDispatch } from "../../app/hook";

const ItemCard = (product: IInitial) => {
  const dispatch = useAppDispatch();

  const handleItemDelete = () => {
    dispatch(deleteItem({ ...product }));
  };

  const handleQuantityAdd = () => {
    dispatch(plusQuantity(product.idx));
  };

  const handleQuantityRemove = () => {
    dispatch(minusQuantity(product.idx));
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      shadow="xs"
      marginBottom="24px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "260px" }}
        src={product.mainImage}
        alt={product.name}
        borderRadius="md"
      />

      <Stack mt="2" padding="1" w="100%">
        <CardBody>
          <Text fontSize="lg" fontWeight="500">
            {product.name}
          </Text>

          <Text py="2">{product.description}</Text>
          <Text fontSize="sm" color="grey">
            최대 구매 가능 수량: {product.maximumPurchases}
          </Text>
          <Text fontSize="lg" fontWeight="500" mt="2">
            ₩ {(product.price * product.quantity).toLocaleString()}원
          </Text>
        </CardBody>

        <Flex>
          <CardFooter w="100%" justifyContent="space-between">
            <Flex align="center">
              <IconButton
                onClick={handleQuantityAdd}
                mr="3"
                aria-label="Add Product"
                icon={<AddIcon />}
              />
              {product?.quantity}
              <IconButton
                onClick={handleQuantityRemove}
                ml="3"
                aria-label="Remove Product"
                icon={<MinusIcon />}
              />
            </Flex>
            <Button ml="20px" fontWeight="500" onClick={handleItemDelete}>
              삭제
            </Button>
          </CardFooter>
        </Flex>
      </Stack>
    </Card>
  );
};

export default ItemCard;
