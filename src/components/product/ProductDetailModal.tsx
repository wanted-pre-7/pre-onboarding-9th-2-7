import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { IProduct } from "../../types";

interface IProductDetailModalProps {
  product: IProduct;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({
  isOpen,
  onClose,
  product,
}: IProductDetailModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Badge colorScheme="blue">{product.spaceCategory}</Badge>
            <Text fontSize="sm" color="gray.600">
              {product.registrationDate}
            </Text>
          </HStack>

          <Text display={"block"} as="b" noOfLines={1} fontSize="lg">
            [{product.idx}] {product.name}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={"flex-start"}>
            <Box>
              <Box overflow={"hidden"} rounded="2xl">
                <Image
                  objectFit={"cover"}
                  boxSize="400px"
                  src={product.mainImage}
                />
              </Box>

              <Text mt="3" fontSize="md">
                {product.description}
              </Text>
              <Text align="right" fontSize={"xl"} color="blue.600">
                {product.price}원
              </Text>
              <Text align="right" fontSize="sm" color="gray.600">
                최대 구매 수량 : {product.maximumPurchases}
              </Text>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailModal;
