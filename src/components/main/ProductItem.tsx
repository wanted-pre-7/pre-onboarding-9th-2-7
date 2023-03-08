import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { IProduct } from "../../apis/product";
import productApis from "../../apis/product";

interface IProps {
  product: IProduct;
  handleOpenModal: (product: IProduct) => void;
}
const ProductItem = ({ product, handleOpenModal }: IProps) => {
  const { mutate: addReservation } = productApis.AddReservation();

  const handleAddReservation = () => {
    addReservation({ ...product, cnt: 1, id: product.idx });
  };

  return (
    <>
      <Card
        w={"full"}
        h={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"lg"}
        zIndex={1}
        display="flex"
        flexDirection="column"
      >
        <CardBody w="full" display="flex" flexDirection="column">
          <Heading
            fontSize="lg"
            mb="2"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {product.idx}. {product.name}
          </Heading>

          <Image
            rounded={"lg"}
            objectFit={"cover"}
            src={product.mainImage}
            mb={2}
          />
          <Stack>
            <Text fontSize="sm">{product.spaceCategory}</Text>
            <Text fontSize="lg" fontWeight="semibold">
              {product.price}원
            </Text>
          </Stack>
        </CardBody>
        <Divider color="lightgray" />
        <CardFooter w="full">
          <ButtonGroup display="flex" justifyContent="space-between" w="full">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleAddReservation}
            >
              예약하기
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleOpenModal(product)}
            >
              자세히 보기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductItem;
