import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Image,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { IStateType } from '../app/store';
import { cartSliceAciton } from '../app/store';
import type { IProductType } from '../types/product';
import DetailModal from './DetailModal';

type PropsType = {
  info: IProductType;
};

const Product = ({ info }: PropsType) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartSlice);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isReservated = cartItems.map((cart) => cart.idx).includes(info.idx);
  const handleCartClick = () => {
    const isIdx = cartItems.find((item: IStateType) => item.idx === info.idx);
    if (isIdx)
      toast({
        title: '이미 장바구니에 추가한 상품입니다.',
        status: 'error',
        duration: 3000,
        position: 'top',
      });
    else {
      dispatch(cartSliceAciton.addItem({ ...info, cnt: 1 }));
      toast({
        title: '상품이 장바구니에 담겼습니다.',
        status: 'success',
        duration: 3000,
        position: 'top',
      });
    }
  };

  return (
    <Box
      minW="200px"
      maxW="200px"
      border="1px"
      borderRadius="4px"
      borderColor="gray.100"
      overflow="hidden"
    >
      <DetailModal isOpen={isOpen} onClose={onClose} product={info} />
      <Image w="100%" src={info?.mainImage} alt={info?.name} />
      <Box p="8px" cursor="pointer">
        <Badge borderRadius="full" px="2" colorScheme="cyan">
          {info?.spaceCategory}
        </Badge>
        <Box display="flex" flexDir="column" mt="10px" minH="100px">
          <Text color="gray.600" fontSize="12px">
            상품 번호 {info?.idx}
          </Text>
          <Text color="gray.800" fontSize="18px" fontWeight="black">
            {info?.name}
          </Text>
          <Text color="cyan.800" fontSize="18px" fontWeight="black">
            {info?.price.toLocaleString('ko-kr')}원
          </Text>
        </Box>
        <Divider my="15px" />
        <ButtonGroup display="flex" justifyContent="center" spacing="2">
          <Button variant="outline" colorScheme="cyan" onClick={onOpen}>
            자세히
          </Button>
          <Button
            variant="solid"
            colorScheme="cyan"
            onClick={handleCartClick}
            isDisabled={isReservated}
          >
            {isReservated ? '예약완료' : '예약하기'}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Product;
