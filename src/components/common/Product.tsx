import { useDisclosure } from '@chakra-ui/react';
import ProductModal from './ProductModal';

const Product = ({
  product,
  getReservation,
  isReservated,
}: {
  product: IProduct;
  getReservation?: () => void;
  isReservated?: boolean;
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
