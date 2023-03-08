import { Box, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";

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
          <Heading color={"blue"}>Like a local</Heading>
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
