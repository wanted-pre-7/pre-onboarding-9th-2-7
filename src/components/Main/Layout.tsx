import { Container, SimpleGrid } from "@chakra-ui/react";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <Container mt="120px" maxW="1024px" padding={{ base: 7, lg: 10 }}>
      <SimpleGrid
        columns={{ base: 1, sm: 1, lg: 3 }}
        spacing={{ sm: 3, lg: 1 }}
        placeItems="center"
      >
        {children}
      </SimpleGrid>
    </Container>
  );
};

export default Layout;
