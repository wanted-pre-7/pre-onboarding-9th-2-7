import { Button, Stack, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import type { IState } from '../../stores';
import { purchaseListActions } from '../../stores';
import ProductModal from './ProductModal';

const Product = ({
  product,
  getReservation,
  isReservated,
  isReservationMode,
  handleDelete,
}: {
  product: IProduct;
  getReservation?: () => void;
  isReservated?: boolean;
  isReservationMode?: boolean;
  handleDelete?: () => void;
}) => {
  const { purchaseList } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const count = purchaseList.find(
    (purchase) => purchase.idx === product.idx,
  )?.count;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlePurChase = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLElement;
    const { innerText } = eventTarget;
    if (innerText === '+') {
      if (count === product.maximumPurchases) {
        alert('최대 구매 가능 개수입니다.');
        return;
      }
      dispatch(purchaseListActions.count(product.idx));
    }
    if (innerText === '-') {
      if (count === 1) {
        alert('최소 구매 개수입니다.');
        return;
      }
      dispatch(purchaseListActions.discount(product.idx));
    }
  };

  return (
    <>
      <div onClick={() => onOpen()}>
        <div>{product.name}</div>
        <img src={product.mainImage} alt={product.description}></img>
      </div>
      {isReservated ? (
        <button onClick={getReservation} disabled>
          예약완료
        </button>
      ) : (
        <button onClick={getReservation}>예약하기</button>
      )}
      {isReservationMode ? (
        <>
          <button onClick={handleDelete}>삭제하기</button>
          <Stack spacing={4} align="center" direction={'row'}>
            <Button onClick={handlePurChase} colorScheme={'teal'} size="sm">
              +
            </Button>
            <span>{count}</span>
            <Button onClick={handlePurChase} colorScheme={'teal'} size="sm">
              -
            </Button>
          </Stack>
        </>
      ) : null}
      <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default Product;

export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}
