import { Box, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleNav = (link: string) => navigate(link);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="gray.100"
      color="gray.800"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Box cursor="pointer" onClick={() => handleNav("/main")}>
        like a local
      </Box>
      <Image
        src={cart}
        cursor="pointer"
        onClick={() => handleNav("/reservations")}
      />
    </Flex>
  );
};

export default Header;
