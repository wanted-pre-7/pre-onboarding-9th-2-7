import { Button, ButtonGroup, Flex, Image } from '@chakra-ui/react';
import { useMatch, useNavigate } from 'react-router-dom';
import CartSvg from '../assets/CartSvg';
import GridSvg from '../assets/GridSvg';

const Header = () => {
  const navigate = useNavigate();
  const mainMatch = useMatch('/main');
  const cartMatch = useMatch('/reservations');

  const handleNav = (link: string) => navigate(link);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h={'58px'}
      mb={8}
      p={8}
      color="gray.800"
      position="sticky"
      top="0"
      zIndex="100"
      padding={'0% 10%'}
    >
      <Image
        w={'128px'}
        h={'auto'}
        src="src/assets/logo.png"
        cursor="pointer"
        onClick={() => handleNav('/main')}
      />
      <ButtonGroup>
        <Button
          colorScheme={mainMatch ? 'telegram' : undefined}
          onClick={() => handleNav('/main')}
        >
          <GridSvg />
        </Button>
        <Button
          colorScheme={cartMatch ? 'telegram' : undefined}
          onClick={() => handleNav('/reservations')}
        >
          <CartSvg />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
