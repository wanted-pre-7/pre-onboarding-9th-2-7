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
} from "@chakra-ui/react";
import type { IProductType } from "../types/product";
import theme from "../utils/theme";

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
            color={theme.colors.main400}
            fontSize={theme.sizes.xl}
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
            <Box
              as="span"
              color={theme.colors.point200}
              fontSize={theme.sizes.xl}
            >
              {product?.price.toLocaleString("ko-kr")}원
            </Box>
          </ModalHeader>
          <ModalBody color={theme.colors.main400} fontSize={theme.sizes.m}>
            {product?.description}
          </ModalBody>
          <ModalBody color={theme.colors.main300} fontSize={theme.sizes.xs}>
            * 이 상품은{" "}
            <Box as="span" fontWeight="bold">
              1인 최대 1개
            </Box>{" "}
            까지 구매 가능 합니다.
            <br /> * 상품 번호 : {product?.idx}
            <br />* 상품 등록일 : {product?.registrationDate}
          </ModalBody>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button variant="solid" colorScheme="gray" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailModal;
