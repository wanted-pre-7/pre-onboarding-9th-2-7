import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Image as ChakraImage,
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import type { IProduct } from "../../types/product";
import { addReservation } from "../features/reservationSlice";

interface IProps {
  product: IProduct;
  handleOpenModal: (product: IProduct) => void;
  isReserve: boolean;
}

const ProductItem = ({ product, handleOpenModal, isReserve }: IProps) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const handleAddReservation = () => {
    dispatch(addReservation({ ...product, cnt: 1 }));
    toast({
      title: "상품이 예약되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Card
      w={"full"}
      h={"full"}
      maxW={"400px"}
      mx="auto"
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

        <ChakraImage
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
            isDisabled={isReserve}
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
  );
};

export default ProductItem;
