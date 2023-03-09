import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hook";
import { reserveActions } from "../../slice/reserveList";
import type { IProduct } from "../../types";
import DetailModal from "./DetailModal";

const Product = (product: IProduct) => {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
  } = product;

  const toast = useToast();
  const dispatch = useAppDispatch();
  const reserveList = useAppSelector((state) => state.reserveList);
  const isReserved = reserveList.find((item) => item.idx === idx);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onProductClick = () => {
    onOpen();
  };

  const onAddProduct = () => {
    const index = reserveList.findIndex((el) => el.idx === idx);

    if (!isReserved) {
      const reserveProduct = { ...product, count: 1 };
      dispatch(reserveActions.add(reserveProduct));
      toast({
        description: "상품이 장바구니에 추가되었습니다.",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (reserveList[index].count < maximumPurchases) {
      dispatch(reserveActions.addCount(idx));
      toast({
        description: "상품 수량을 추가 하였습니다.",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  };

  return (
    <>
      <ProductWrap>
        <ProductBody>
          <ProductImage
            src={mainImage}
            alt={description}
            borderRadius="lg"
            onClick={onProductClick}
          />
          <InfoWrap mt="6" spacing="3">
            <Heading size="md">
              #{idx} [{spaceCategory}] {name}
            </Heading>
            <Text color="blue.600" fontSize="lg">
              {price.toLocaleString()}원
            </Text>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={onAddProduct}
              isDisabled={!!isReserved}
            >
              {isReserved ? "예약완료" : "예약"}
            </Button>
          </InfoWrap>
        </ProductBody>
      </ProductWrap>

      <DetailModal
        isOpen={isOpen}
        onClose={onClose}
        product={product}
        onAddProduct={onAddProduct}
      />
    </>
  );
};

const ProductWrap = styled(Card)`
  display: grid;
  place-items: center;
  width: 400px;
  margin-top: 20px;
`;

const ProductBody = styled(CardBody)`
  display: grid;
  place-items: center;
  width: 85%;
`;

const ProductImage = styled(Image)`
  cursor: pointer;
`;

const InfoWrap = styled(Stack)`
  width: 100%;
`;

export default Product;
