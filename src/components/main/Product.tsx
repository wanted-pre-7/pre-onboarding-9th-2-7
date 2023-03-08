import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { IProduct } from "../types";

const Product = (product: IProduct) => {
  const { idx, name, mainImage, description, spaceCategory, price } = product;

  return (
    <ProductWrap>
      <ProductBody>
        <Image src={mainImage} alt={description} borderRadius="lg" />
        <InfoWrap mt="6" spacing="3">
          <Heading size="md">
            #{idx} [{spaceCategory}] {name}
          </Heading>
          <Text color="blue.600" fontSize="lg">
            {price.toLocaleString()}원
          </Text>
          <Button variant="solid" colorScheme="blue">
            예약
          </Button>
        </InfoWrap>
      </ProductBody>
    </ProductWrap>
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

const InfoWrap = styled(Stack)`
  width: 100%;
`;

export default Product;
