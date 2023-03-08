import { Center } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import productApis from "../apis/product";
import Layout from "../components/layout/Layout";
import MainHeader from "../components/main/MainHeader";
import ReservationItem from "../components/reservations/ReservationItem";

const Reservations = () => {
  const { data: reservationList } = productApis.ReadReservations();

  return (
    <Layout>
      <MainHeader />
      <Center
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={5}
      >
        {React.Children.toArray(
          reservationList?.map((reservation) => (
            <ReservationItem reservation={reservation} />
          )),
        )}
      </Center>
      <>
        {!reservationList?.length && (
          <HasNotResult>예약이 없습니다.</HasNotResult>
        )}
      </>
    </Layout>
  );
};

export default Reservations;

const HasNotResult = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
