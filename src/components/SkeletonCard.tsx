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
            width="100%"
            padding="5"
          >
            <Skeleton height="290px" borderRadius="lg" />
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
