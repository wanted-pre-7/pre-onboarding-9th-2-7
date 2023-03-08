import { useSelector } from 'react-redux';
import type { IProduct } from '../components/common/Product';
import Reservation from '../components/Reservation';
import type { IState } from '../stores';

const ReservationPage = () => {
  const { reservationList, purchaseList } = useSelector(
    (state: IState) => state,
  );
  const total = purchaseList.reduce(
    (acc, cur) => acc + cur.count * cur.price,
    0,
  );
  return (
    <>
      <h1>{total}</h1>
      {reservationList.map((product: IProduct) => {
        return <Reservation key={product.idx} product={product} />;
      })}
    </>
  );
};

export default ReservationPage;
