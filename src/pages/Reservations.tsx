import styled from "@emotion/styled";
import Header from "../components/common/Header";
import ReserveItem from "../components/reservations/ReserveItem";
import { useAppSelector } from "../hook";

const Reservations = () => {
  const reserveList = useAppSelector((state) => state.reserveList);
  console.log(reserveList);
  return (
    <>
      <Header />
      <ReservationsWrap>
        <ReserveListWrap>
          {reserveList.map((item) => (
            <ReserveItem key={item.idx} {...item} />
          ))}
        </ReserveListWrap>
        <CartInfoWrap></CartInfoWrap>
      </ReservationsWrap>
    </>
  );
};

const ReservationsWrap = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  height: 100vh;
`;

const ReserveListWrap = styled.div``;

const CartInfoWrap = styled.div``;

export default Reservations;
