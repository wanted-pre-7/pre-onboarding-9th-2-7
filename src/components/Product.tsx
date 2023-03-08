import { useDispatch, useSelector } from 'react-redux';
import type { IState } from '../stores';
import { reservationListActions } from '../stores';

const Product = ({ product }: { product: IProduct }) => {
  const { reservationList } = useSelector((state: IState) => state);
  const isReservated = reservationList.find((list) => list.idx === product.idx);
  const dispatch = useDispatch();

  const getReservation = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(reservationListActions.add(product));
  };

  return (
    <div>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <img src={product.mainImage} alt={product.description}></img>
      <div>{product.price}</div>
      <div>{product.registrationDate}</div>
      <button onClick={getReservation}>
        {isReservated ? '예약완료' : '예약하기'}
      </button>
    </div>
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
