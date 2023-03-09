import { Badge, Box, Center, Flex, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import cart from "../assets/cart.svg";
import theme from "../utils/theme";

const Header = () => {
  const navigate = useNavigate();
  const handleNav = (link: string) => navigate(link);

  const cartItems = useAppSelector((state) => state.cartSlice);

  return (
    <Container>
      <Wrapper>
        <Box as="b" cursor="pointer" onClick={() => handleNav("/main")}>
          라이크어로컬
        </Box>
        <CartWrapper>
          <Image
            src={cart}
            cursor="pointer"
            onClick={() => handleNav("/reservations")}
          />
          <Badge borderRadius="full" px="8px" colorScheme="cyan">
            {cartItems.length}
          </Badge>
        </CartWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 888;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 30px;
  background: ${theme.colors.main100};
  border: 1px solid ${theme.colors.main200};
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const CartWrapper = styled.div`
  display: flex;
  gap: 3px;
`;
