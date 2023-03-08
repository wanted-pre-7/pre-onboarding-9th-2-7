import {
  Badge,
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
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { addCart } from "../../features/cartSlice";
import type { IProduct } from "../../types/product";

interface Props {
  product: IProduct;
  handleClickModal?: (idx: number) => void;
}

const ProductCard = ({ product, handleClickModal }: Props) => {
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const dispatch = useAppDispatch();
  const cartLength = cart.filter((item) => item.idx === product.idx).length + 1;

  const handleClickCart = (product: IProduct) => {
    if (cartLength <= product.maximumPurchases) {
      dispatch(addCart(product));

      toast({
        title: "성공적으로 장바구니에 담겼습니다.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      toast({
        title: "최대 구매 개수를 초과하였습니다.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <Card
      maxW="sm"
      key={product.idx}
      _hover={{
        shadow: "md",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "0.3s",
      }}
    >
      <CardBody>
        <Image src={product.mainImage} alt={product.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" wordBreak="keep-all">
            <Text display="inline-block">{product.idx}</Text>. {product.name}
          </Heading>
          <Text
            color="blue.600"
            fontSize="xl"
            display="flex"
            alignItems="center"
            // justifyContent="space-between"
            gap="4"
          >
            {product.price.toLocaleString()} 원
            <Badge p="2" borderRadius="md">
              {product.spaceCategory}
            </Badge>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleClickModal?.(product.idx)}
          >
            더보기
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => handleClickCart(product)}
          >
            예약하기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
