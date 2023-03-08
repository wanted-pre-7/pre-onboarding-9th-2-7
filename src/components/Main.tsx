import { useDispatch, useSelector } from 'react-redux';
import type { IState } from '../stores';
import { purchaseListActions, reservationListActions } from '../stores';
import type { IProduct } from './common/Product';
import Product from './common/Product';

const Main = ({ product }: { product: IProduct }) => {
  const { reservationList } = useSelector((state: IState) => state);
  const isReservated = reservationList.find((list) => list.idx === product.idx);
  const dispatch = useDispatch();

  const getReservation = () => {
    dispatch(reservationListActions.add(product));
    dispatch(
      purchaseListActions.add({
        idx: product.idx,
        price: product.price,
        maximumPurchases: product.maximumPurchases,
        count: 1,
      }),
    );
  };

  return (
    <Product
      product={product}
      isReservated={!!isReservated}
      getReservation={getReservation}
    />
  );
};

export default Main;
