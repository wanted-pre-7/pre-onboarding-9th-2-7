import { Container, Grid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

const SkeletonUi = () => {
  return (
    <Container maxW="1280px" padding="10" mt={{ sm: "320px", md: "180px" }}>
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={5}
        placeItems={{ sm: "center", md: "normal" }}
      >
        <SkeletonCard length={9} />
      </Grid>
    </Container>
  );
};
export default SkeletonUi;
