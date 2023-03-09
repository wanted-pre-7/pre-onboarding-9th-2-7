import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = ({ length }: { length: number }) => {
  return (
    <>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <Box
            key={index}
            minW="200px"
            border="1px"
            borderRadius="4px"
            borderColor="gray.100"
            overflow="hidden"
          >
            <Skeleton height={{ sm: "300px", md: "200px" }} borderRadius="lg" />
            <Box>
              <SkeletonText
                mt="4"
                width="100%"
                noOfLines={4}
                spacing="4"
                skeletonHeight="5"
              />
            </Box>
          </Box>
        ))}
    </>
  );
};
export default SkeletonCard;
