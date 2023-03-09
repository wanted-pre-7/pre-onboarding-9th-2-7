import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { addItem } from "../../app/cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import AmountInput from "../common/AmountInput";
import type { IModalProps } from "./ProductModal";

const QuantityModal = ({
  product,
  isModalOpen,
  setIsModalOpen,
}: IModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const toast = useToast();

  const handleAddCart = () => {
    const isExistItem = cartItems?.filter((item) => item.idx === product.idx);

    const quantityChain = isExistItem[0]?.quantity;

    if (isExistItem && quantityChain === product.maximumPurchases) {
      toast({
        title: "이미 장바구니에 최대 예약 가능 수량이 담겨있습니다.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: `장바구니에 ${product.name}을 ${quantity}개 담았습니다.`,
        status: "success",
        isClosable: true,
        position: "top",
      });

      dispatch(addItem({ ...product, quantity: +quantity }));
    }
  };

  return (
    <Modal
      isCentered
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack mt="2" padding="0">
            <Text>예약 수량 입력</Text>
            <Text fontSize="sm" color="grey">
              최대 예약 가능 수량: {product.maximumPurchases}
            </Text>
            <AmountInput
              options={{
                size: "lg",
                defaultValue: 1,
                min: 1,
                max: product.maximumPurchases,
                onChange: (valueAsNumber: number) => setQuantity(valueAsNumber),
              }}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            fontWeight="500"
            colorScheme="green"
            onClick={() => {
              setIsModalOpen(false);
              handleAddCart();
            }}
          >
            장바구니에 담기
          </Button>
          <Button fontWeight="500" ml="3" onClick={() => setIsModalOpen(false)}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuantityModal;
