import { Container, SimpleGrid } from "@chakra-ui/react";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <Container mt="120px" maxW="800px" padding={{ base: 10, lg: 10 }}>
      <SimpleGrid columns={1} spacing={{ sm: 3, lg: 1 }}>
        {children}
      </SimpleGrid>
    </Container>
  );
};

export default Layout;
