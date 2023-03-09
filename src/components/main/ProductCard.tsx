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

  const matchedCart = cart.find((item) => item.idx === product.idx);

  const handleClickCart = () => {
    if (product.maximumPurchases === matchedCart?.quantity) {
      toast({
        title: `${product.name} 최대 구매 개수 초과`,
        description: `인 당 ${product.maximumPurchases}개만 구매하실 수 있습니다.`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      dispatch(addCart({ ...product, quantity: 1 }));

      toast({
        title: "성공적으로 장바구니에 담겼습니다.",
        status: "success",
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
        <Image
          src={product.mainImage}
          alt={product.name}
          borderRadius="lg"
          fallbackSrc="https://media.istockphoto.com/id/1147544807/ko/%EB%B2%A1%ED%84%B0/%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EA%B7%B8%EB%9E%98%ED%94%BD.jpg?s=612x612&w=0&k=20&c=d0Ddt3qdtkhxPvpInjBRzLWFjODlfSh3IkKAB6YZwC8="
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" wordBreak="keep-all">
            <Text display="inline-block">{product.idx}</Text>. {product.name}
          </Heading>
          <Text
            color="blue.600"
            fontSize="xl"
            display="flex"
            alignItems="center"
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
            isDisabled={!!matchedCart}
            onClick={handleClickCart}
          >
            {matchedCart ? "예약완료" : "예약하기"}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
