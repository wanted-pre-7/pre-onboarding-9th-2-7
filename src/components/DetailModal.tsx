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
} from '@chakra-ui/react';
import type { IProductType } from '../types/product';

type PropsType = {
  product: IProductType;
  isOpen: boolean;
  onClose: () => void;
};

const DetailModal = ({ product, isOpen, onClose }: PropsType) => {
  return (
    <>
      <Modal
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent overflow="hidden">
          <Image maxH="200px" src={product?.mainImage} alt={product?.name} />
          <ModalCloseButton color="white" />
          <ModalHeader
            fontSize="25px"
            fontWeight="black"
            display="flex"
            flexDir="column"
          >
            <Box w="100%">
              <Badge borderRadius="full" px="2" colorScheme="cyan">
                {product?.spaceCategory}
              </Badge>
            </Box>
            {product?.name}
            <br />
            <Box as="span" color="cyan.800">
              {product?.price.toLocaleString('ko-kr')}원
            </Box>
          </ModalHeader>
          <ModalBody fontSize="20px">{product?.description}</ModalBody>
          <ModalBody fontSize="12px" color="gray.600">
            * 이 상품은
            <Box as="span" fontWeight="bold">
              1인 최대 {product.maximumPurchases}개
            </Box>
            까지 구매 가능 합니다.
            <br /> * 상품 번호 : {product?.idx}
            <br />* 상품 등록일 : {product?.registrationDate}
          </ModalBody>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailModal;
