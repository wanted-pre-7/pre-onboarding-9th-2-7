import { Button, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import ItemCard from "../components/Reservations/ItemCard";
import Layout from "../components/Reservations/Layout";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart);

  return (
    <Layout>
      {cartItems?.length === 0 && (
        <Stack textAlign="center" spacing="6">
          <Heading size="lg" fontFamily="Spoqa Han Sans Neo">
            장바구니에 담은 상품이 없습니다.
          </Heading>
          <Link to="/main">
            <Button variant="link" size="lg" fontWeight="500">
              ← 메인 페이지로 돌아가기
            </Button>
          </Link>
        </Stack>
      )}
      {cartItems?.map((product) => (
        <ItemCard key={product.idx} {...product} />
      ))}
    </Layout>
  );
};

export default Cart;
