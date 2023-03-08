import { Container, SimpleGrid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

const SkeletonUi = () => {
  return (
    <Container maxW="780px" padding="10">
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing={{ sm: "8", md: "10" }}
        placeItems="center"
      >
        <SkeletonCard length={8} />
      </SimpleGrid>
    </Container>
  );
};
export default SkeletonUi;
