import { useSelector } from 'react-redux';
import type { IProduct } from '../components/common/Product';
import Reservation from '../components/Reservation';
import type { IState } from '../stores';

const ReservationPage = () => {
  const { reservationList } = useSelector((state: IState) => state);

  return (
    <>
      {reservationList.map((product: IProduct) => {
        return <Reservation key={product.idx} product={product} />;
      })}
    </>
  );
};

export default ReservationPage;
