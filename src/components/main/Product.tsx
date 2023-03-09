import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hook";
import { reserveActions } from "../../slice/reserveList";
import type { IProduct } from "../../types";
import DetailModal from "./DetailModal";

const Product = (product: IProduct) => {
  const { idx, name, mainImage, description, spaceCategory, price } = product;

  const dispatch = useAppDispatch();
  const reserveList = useAppSelector((state) => state.reserveList);
  const isReserved = reserveList.find((item) => item.idx === idx);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onProductClick = () => {
    onOpen();
  };

  const onAddProduct = () => {
    const reserveProduct = { ...product, count: 1 };
    dispatch(reserveActions.add(reserveProduct));
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
            <Button variant="solid" colorScheme="blue" onClick={onAddProduct}>
              {isReserved ? "예약완료" : "예약"}
            </Button>
          </InfoWrap>
        </ProductBody>
      </ProductWrap>

      <DetailModal isOpen={isOpen} onClose={onClose} product={product} />
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
