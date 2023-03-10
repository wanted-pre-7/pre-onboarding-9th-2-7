import { Box, HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

const SkeletonCard = ({ length }: { length: number }) => {
  return (
    <>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <VStack key={index} alignItems={"flex-start"}>
            <Box mb={3} borderWidth="0.5px">
              <Skeleton height="400px" width="400px" borderRadius="lg" />
              <Box padding={5}>
                <SkeletonText
                  mt="4"
                  width="100%"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="5"
                />
                <HStack mt="5"></HStack>
              </Box>
            </Box>
          </VStack>
        ))}
    </>
  );
};
export default SkeletonCard;
