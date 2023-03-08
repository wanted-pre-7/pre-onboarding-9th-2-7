import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import type { IProduct } from "../../apis/product";
import type { RootState } from "../../app/store";

interface IProps {
  handleCloseModal: () => void;
}

const ProductModal = ({ handleCloseModal }: IProps) => {
  const { product } = useSelector<RootState, { product: IProduct }>(
    (state) => state.product,
  );

  return (
    <Wrapper onClick={handleCloseModal}>
      <Card
        w={"300"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"lg"}
        zIndex={1}
        display="flex"
        flexDirection="column"
      >
        <CardBody w="full" display="flex" flexDirection="column">
          <Heading fontSize="md" mb="2">
            {product.idx}. {product.name}
          </Heading>

          <Image
            rounded={"lg"}
            objectFit={"cover"}
            src={product.mainImage}
            mb={3}
          />
          <Text fontSize="sm" color="blue.600" mb="2">
            {product.spaceCategory}
          </Text>
          <Text mb="2">{product.description}</Text>
          <Stack mb="2">
            <Text fontSize="lg" fontWeight="semibold">
              {product.price}원
            </Text>
          </Stack>
          <Box
            display="flex"
            justifyContent="space-between"
            w="full"
            color="gray"
            fontSize="sm"
          >
            <Text variant="solid" colorScheme="blue">
              최대 수량: {product.maximumPurchases}
            </Text>
            <Text variant="ghost" colorScheme="blue">
              등록일: {product.registrationDate}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default ProductModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
