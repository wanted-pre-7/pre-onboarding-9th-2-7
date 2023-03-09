import { Box, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import FilterIcon from "../common/FilterIcon";
import SkeletonCard from "./SkeletonCard";

const SkeletonUi = () => {
  return (
    <Box w="80%" m="auto" p="30px" color="gray.800">
      <IconButton aria-label="Search database" icon={<FilterIcon />} />
      <Box mt="20px">
        <Text fontSize="20px" as="b">
          상품
        </Text>
        <SimpleGrid w="100%" minChildWidth="200px" spacing="20px" mt="10px">
          <SkeletonCard length={8} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default SkeletonUi;
