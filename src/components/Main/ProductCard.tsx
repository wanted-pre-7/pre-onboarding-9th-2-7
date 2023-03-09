import {
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import type { IProducts } from "../../pages/Main";
import ProductModal from "./ProductModal";
import QuantityModal from "./QuantityModal";

const ProductCard = (product: IProducts) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantitySelect, setQuantitySelect] = useState(false);

  return (
    <>
      {isModalOpen && (
        <ProductModal
          product={product}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {quantitySelect && (
        <QuantityModal
          product={product}
          isModalOpen={quantitySelect}
          setIsModalOpen={setQuantitySelect}
        />
      )}

      <Card
        shadow="none"
        minH="300px"
        maxH="400px"
        marginBottom="24px"
        cursor="pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <CardBody>
          <Image
            src={product.mainImage}
            alt="Product image"
            borderRadius="lg"
          />
          <Stack mt="2" padding="1">
            <Flex flexDirection="column">
              <Text>
                [{product.idx}] {product.name}
              </Text>
              <Text fontSize="sm" color="grey">
                #{product.spaceCategory}
              </Text>
            </Flex>

            <Flex align="center" justifyContent="space-between">
              <Text fontSize="md" fontWeight="500">
                ₩ {product.price.toLocaleString()}원
              </Text>
              <Button
                fontWeight="500"
                onClick={(event) => {
                  setQuantitySelect(true);
                  event.stopPropagation();
                }}
              >
                예약하기
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
