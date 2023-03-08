import { useDispatch } from 'react-redux';
import { reservationListActions } from '../stores';
import type { IProduct } from './common/Product';
import Product from './common/Product';

const Reservation = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(reservationListActions.delete(product));
  };

  return (
    <Product
      product={product}
      isReservationMode={true}
      isReservated={true}
      handleDelete={handleDelete}
    />
  );
};

export default Reservation;
