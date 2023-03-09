import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../app/hook";
import ReservationCard from "../components/reservations/ReservationCard";
import { getTotal } from "../utils/getTotals";

const Reservations = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <Container as="section" maxW="1280px" padding="10">
      <Heading mb="8" fontSize="2xl">
        총 수량 {getTotal(cart).totalQuantity}
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap={10}>
        {cart.length > 0 ? (
          cart.map((product) => (
            <ReservationCard key={product.idx} product={product} />
          ))
        ) : (
          <Heading fontSize="xl">장바구니가 비었습니다.</Heading>
        )}
      </Grid>
      <Box mt="14">
        <Heading fontSize="xl">
          합계 {getTotal(cart).totalPrice.toLocaleString()} 원
        </Heading>
      </Box>
    </Container>
  );
};
export default Reservations;
