import { Box, Grid, IconButton, Text, Wrap } from "@chakra-ui/react";
import FilterIcon from "../common/FilterIcon";
import SkeletonCard from "./SkeletonCard";

const SkeletonUi = () => {
  return (
    <Box w="80%" m="auto" p="30px" color="gray.800">
      <Wrap justify="right">
        <IconButton
          aria-label="Search database"
          icon={<FilterIcon height="25" />}
        />
      </Wrap>
      <Box mt="20px">
        <Text fontSize="20px" as="b">
          상품
        </Text>
        <Grid
          mt="5"
          gap={4}
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
        >
          <SkeletonCard length={8} />
        </Grid>
      </Box>
    </Box>
  );
};
export default SkeletonUi;
