import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  useToast,
  useDisclosure,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { addCartItem } from "../../features/cartSlice";
import ProductModal from "./ProductModal";
import type { IProduct } from "../../type/product";
import type { IcartItem } from "../../features/cartSlice";

interface Props {
  productData: IProduct;
}

const Product = ({ productData }: Props) => {
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickAddCart = (productData: IProduct) => {
    const cartItem: IcartItem | undefined = cart.items.find(
      (el) => el.idx === productData.idx,
    );
    if (!cartItem || productData?.maximumPurchases > cartItem?.quantity) {
      dispatch(addCartItem(productData));
      toast({
        description: `${productData.name} 상품이 장바구니에 담겼습니다.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        description: `${productData.name}의 최대구매 수량을 초과했습니다.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={productData.mainImage}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex>
              <Heading size="md">{`${productData.idx}. ${productData.name}`}</Heading>
              <Badge ml="1" fontSize="0.8em">
                {productData.spaceCategory}
              </Badge>
            </Flex>
            <Text color="blue.600" fontSize="2xl">
              {`${productData.price.toLocaleString("ko-KR")}원`}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              상세정보
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleClickAddCart(productData)}
            >
              장바구니 담기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        productData={productData}
      />
    </>
  );
};

export default Product;
