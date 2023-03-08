import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import type { IProduct } from './Product';

const ProductModal = ({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${product.idx}. ${product.name}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={product.mainImage}></img>
            <p>{product.description}</p>
            <div>{product.spaceCategory}</div>
            <div>{product.price}</div>
            <div>{product.maximumPurchases}</div>
            <div>{product.registrationDate}</div>
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
