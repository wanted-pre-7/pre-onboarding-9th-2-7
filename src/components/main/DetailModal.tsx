import {
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
import styled from "@emotion/styled";
import type { IModalProps } from "../../types";

const DetailModal = ({
  isOpen,
  onClose,
  product,
  onAddProduct,
}: IModalProps) => {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = product;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          #{idx} [{spaceCategory}] {name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalImageWrap>
          <ModalImage src={mainImage} alt={description} borderRadius="lg" />
        </ModalImageWrap>
        <ModalBody>
          <p>{description}</p>
          <p>가격: {price}</p>
          <p>최대 구매 갯수: {maximumPurchases}</p>
          <p>등록일: {registrationDate}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onAddProduct}>예약</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ModalImageWrap = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

const ModalImage = styled(Image)`
  width: 400px;
  height: 400px;
`;

export default DetailModal;
