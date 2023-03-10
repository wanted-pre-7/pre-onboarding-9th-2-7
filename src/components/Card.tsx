import {
  Badge,
  Button,
  ButtonGroup,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import fallback from "../assets/images/fallback.jpg";
import { addItem } from "../features/cartSlice";
import type { ICartStateType } from "../features/cartSlice";
import type { IProductType } from "../types/product";
import theme from "../utils/theme";
import DetailModal from "./DetailModal";

type PropsType = {
  product: IProductType;
};

const Card = ({ product }: PropsType) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartSlice);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCart, setIsCart] = useState<boolean>(false);

  useEffect(() => {
    cartItems.find((item: ICartStateType) => item.idx === product.idx)
      ? setIsCart(true)
      : setIsCart(false);
  }, [cartItems]);

  const handleCartClick = () => {
    if (!isCart) {
      dispatch(addItem(product));
      toast({
        title: "상품을 장바구니에 추가하였습니다.",
        status: "success",
        duration: 3000,
        position: "top",
      });
    }
  };

  return (
    <>
      <DetailModal isOpen={isOpen} onClose={onClose} product={product} />
      <Container>
        <Image
          src={product?.mainImage}
          alt={product?.name}
          w="100%"
          fallbackSrc={fallback}
        />
        <Wrapper>
          <Badge borderRadius="full" px="8px" colorScheme="cyan">
            {product?.spaceCategory}
          </Badge>
          <TextWrapper>
            <Text color={theme.colors.main300} fontSize={theme.sizes.xs}>
              상품 번호 {product?.idx}
            </Text>
            <Text fontWeight="black">{product?.name}</Text>
            <Text
              color={theme.colors.point200}
              fontWeight="black"
              fontSize={theme.sizes.xl}
            >
              {product?.price.toLocaleString("ko-kr")}원
            </Text>
          </TextWrapper>
          <ButtonGroup display="flex" spacing="2">
            <Button variant="outline" colorScheme="gray" onClick={onOpen}>
              알아보기
            </Button>
            <Button
              colorScheme="cyan"
              onClick={handleCartClick}
              isDisabled={isCart}
            >
              {isCart ? "예약완료" : "예약하기"}
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  min-width: 200px;
  border: 1px solid ${theme.colors.main200};
  border-radius: 8px;
  background: ${theme.colors.white};
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding: 15px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 120px;
  margin-top: 10px;
  color: ${theme.colors.main400};
  font-size: ${theme.sizes.m};
`;
