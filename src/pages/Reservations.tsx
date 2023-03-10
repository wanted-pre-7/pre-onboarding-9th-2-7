import styled from "@emotion/styled";
import { useMemo } from "react";
import Header from "../components/common/Header";
import ReserveItem from "../components/reservations/ReserveItem";
import { useAppSelector } from "../hook";

const Reservations = () => {
  const reserveList = useAppSelector((state) => state.reserveList);

  const totalPrice = useMemo(() => {
    return reserveList.reduce((acc, curr) => {
      return acc + curr.price * curr.count;
    }, 0);
  }, [reserveList]);

  return (
    <>
      <Header />
      <ReservationsWrap>
        <ReserveListWrap>
          {reserveList.map((item) => (
            <ReserveItem key={item.idx} {...item} />
          ))}
        </ReserveListWrap>
        <CartInfoWrap>
          <TotalPrice>총 상품금액: </TotalPrice>
          <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
        </CartInfoWrap>
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

const CartInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const TotalPrice = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export default Reservations;
