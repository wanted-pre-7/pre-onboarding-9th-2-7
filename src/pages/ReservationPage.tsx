import { useSelector } from 'react-redux';
import type { IProduct } from '../components/Product';
import Product from '../components/Product';
import type { IState } from '../stores';

const ReservationPage = () => {
  const { reservationList } = useSelector((state: IState) => state);
  console.log(reservationList);
  return (
    <>
      {reservationList.map((product: IProduct) => {
        return <Product key={product.idx} product={product} />;
      })}
    </>
  );
};

export default ReservationPage;
