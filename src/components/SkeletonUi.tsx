import { Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import SkeletonCard from "./SkeletonCard";

const SkeletonUi = () => {
  return (
    <Container>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={{ sm: 6, md: 4 }}
        placeItems={{ sm: "center", md: "normal" }}
        mt={{ sm: "320px", md: "280px", lg: "220px", xl: "250px" }}
      >
        <SkeletonCard length={8} />
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export default SkeletonUi;
