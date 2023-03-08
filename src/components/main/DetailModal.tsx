import {
  Badge,
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import type { IProduct } from "../../types/product";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}

const DetailModal = ({ isOpen, onClose, product }: Props) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      closeOnEsc
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{/* {product?.idx}. {product?.name} */}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="grid" placeItems="center" gap="4">
            <Image
              src={product?.mainImage}
              alt={product?.name}
              borderRadius="lg"
            />

            <Box>
              <Box display="flex" alignItems="center" mb="2">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {product?.spaceCategory}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  최대 구매 수량 {product?.maximumPurchases}
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap="1">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={2}
                >
                  {product?.idx}. {product?.name}
                </Box>

                <Text fontSize="sm" fontWeight="600" color="gray.600">
                  {product?.description}
                </Text>
                <Text fontSize="sm" fontWeight="500" color="gray.600">
                  상품 등록 시간: {product?.registrationDate}
                </Text>

                <Box>
                  {product?.price.toLocaleString()}{" "}
                  <Box as="span" color="gray.600" fontSize="sm">
                    원
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DetailModal;
