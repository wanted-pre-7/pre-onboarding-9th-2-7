import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { deleteItem } from "../../app/cartSlice";
import { useAppDispatch } from "../../app/hook";
import type { IProducts } from "../../pages/Main";

const ItemCard = (product: IProducts) => {
  const dispatch = useAppDispatch();

  const handleItemDelete = () => {
    dispatch(deleteItem({ ...product }));
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      shadow="xs"
      marginBottom="24px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={product.mainImage}
        alt={product.name}
        borderRadius="md"
      />

      <Stack mt="2" padding="1">
        <CardBody>
          <Text fontSize="lg" fontWeight="500">
            {product.name}
          </Text>

          <Text py="2">{product.description}</Text>
        </CardBody>

        <CardFooter>
          <Button fontWeight="500" onClick={handleItemDelete}>
            삭제
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ItemCard;
