import { HStack, Box, Heading } from "@chakra-ui/react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={5}
        borderBottomWidth={1}
      >
        <Box>
          <Link to={"/main"}>
            <Heading>Main</Heading>
          </Link>

          <Link to={"/reservations"}>
            <CartIcon />
          </Link>
        </Box>
      </HStack>
    </>
  );
};

export default Header;
