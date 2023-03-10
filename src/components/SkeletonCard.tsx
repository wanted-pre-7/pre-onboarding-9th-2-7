import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = ({ length }: { length: number }) => {
  return (
    <>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <Box
            key={index}
            boxShadow="lg"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            w="100%"
            h="100%"
            overflow="hidden"
          >
            <Skeleton
              w="100%"
              height={{ sm: "320px", md: "200px", lg: "220px", xl: "300px" }}
            />
            <Box padding="15px">
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
