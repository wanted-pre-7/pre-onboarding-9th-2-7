import { CircularProgress, Flex } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Flex justify="center" align="center" mt="40vh">
      <CircularProgress isIndeterminate color="green.300" size="60px" />
    </Flex>
  );
};

export default LoadingSpinner;
