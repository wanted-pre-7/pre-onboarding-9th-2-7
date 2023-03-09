import { Container, Grid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

const SkeletonUi = () => {
  return (
    <Container maxW="1280px" padding="10" mt="72px">
      <Grid
        templateColumns="repeat(auto-fill, minmax(15rem, 1fr))"
        gap={10}
        placeItems={{ sm: "center", md: "normal" }}
      >
        <SkeletonCard length={8} />
      </Grid>
    </Container>
  );
};
export default SkeletonUi;
