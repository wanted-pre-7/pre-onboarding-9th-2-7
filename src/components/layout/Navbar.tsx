import { Box, Container, Heading, Link } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container as="main" maxW="1280px" padding="10" marginInline="auto">
      <Box
        as="nav"
        paddingInline="10"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading fontSize="2xl">
          <Link
            as={RouterLink}
            to="main"
            _hover={{ textDecorationLine: "none" }}
          >
            라이크어로컬
          </Link>
        </Heading>

        <Link
          as={RouterLink}
          to="reservations"
          _hover={{ textDecorationLine: "none" }}
          bgColor="blue.500"
          borderRadius="md"
          padding="2"
          color="white"
          fontWeight="semibold"
        >
          장바구니
        </Link>
      </Box>
      <Outlet />
    </Container>
  );
};
export default Navbar;
