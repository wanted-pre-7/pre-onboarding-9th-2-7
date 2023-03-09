import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Heading,
  Flex,
  Badge,
} from "@chakra-ui/react";

import type { IProduct } from "../../type/product";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productData: IProduct;
}

const ProductModal = ({ isOpen, onClose, productData }: ModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={productData.mainImage} />
            <Heading size="md">{`${productData.idx}. ${productData.name}`}</Heading>
            <Flex>
              <Text color="blue.600" fontSize="2xl">
                {`${productData.price.toLocaleString("ko-KR")}원`}
              </Text>
              <Badge>{productData.spaceCategory}</Badge>
            </Flex>
            <Text>{`최대 구매 가능 개수: ${productData.maximumPurchases}`}</Text>
            <Text>{productData.description}</Text>
            <Text>{`상품 등록일: ${productData.registrationDate}`}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductModal;
