import { Box, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";

const Logo = styled.img`
  width: 150px;
`;

const Header = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      py={5}
      px={5}
      borderBottomWidth={1}
    >
      <Box>
        <Link to={"/main"}>
          <Logo src="src/assets/logo.png" alt="logo" />
        </Link>
      </Box>
      <HStack spacing={2}>
        <Link to={"/reservations"}>
          <HeaderCartButton />
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
