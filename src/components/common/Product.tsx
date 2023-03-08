import { useDisclosure } from '@chakra-ui/react';
import ProductModal from './ProductModal';

const Product = ({
  product,
  getReservation,
  isReservated,
  isDeleted,
  handleDelete,
}: {
  product: IProduct;
  getReservation?: () => void;
  isReservated?: boolean;
  isDeleted?: boolean;
  handleDelete?: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={() => onOpen()}>
        <div>{product.name}</div>
        <img src={product.mainImage} alt={product.description}></img>
      </div>
      {isReservated ? (
        <button onClick={getReservation}>예약완료</button>
      ) : (
        <button onClick={getReservation}>예약하기</button>
      )}
      {isDeleted ? <button onClick={handleDelete}>삭제하기</button> : null}
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
