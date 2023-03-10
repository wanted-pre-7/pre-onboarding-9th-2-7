import { HStack, Box, Heading, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import CartIcon from "./cart/CartIcon";
import { useAppSelector } from "../app/hook";

const Header = () => {
  const { cart } = useAppSelector((state) => state);
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
            <Badge colorScheme={"blue"}>{cart.totalQuantitiy}</Badge>
          </Link>
        </Box>
      </HStack>
    </>
  );
};

export default Header;
