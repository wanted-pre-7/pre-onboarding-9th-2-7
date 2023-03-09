import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import type { IProducts } from "../../pages/Main";

export interface IModalProps {
  product: IProducts;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductModal = ({
  product,
  isModalOpen,
  setIsModalOpen,
}: IModalProps) => {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center" justify="center" flexDirection="column">
              <Image
                src={product.mainImage}
                alt="Product image"
                borderRadius="md"
                mt="10"
              />

              <Stack mt="2" padding="1" maxW="300px">
                <Text fontSize="lg" fontWeight="500">
                  [{product.idx}] {product.name}
                </Text>
                <Text>{product.description}</Text>
                <Text fontSize="sm" color="grey">
                  지역: {product.spaceCategory} <br />
                  최대 예약 가능 수량: {product.maximumPurchases} <br />
                  상품 등록 날짜: {product.registrationDate}
                </Text>
                <Text fontSize="lg" fontWeight="500">
                  ₩ {product.price.toLocaleString()}원
                </Text>
              </Stack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button fontWeight="500" onClick={() => setIsModalOpen(false)}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductModal;
