import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import theme from "../utils/theme";

const SkeletonList = () => {
  return (
    <Container>
      <SimpleGrid w="100%" minChildWidth="200px" spacing="20px" mt="10px">
        {Array(8)
          .fill(0)
          .map((_, idx) => (
            <CardContainer key={idx}>
              <Skeleton h="500px" />
            </CardContainer>
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default SkeletonList;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  min-width: 200px;
  border: 1px solid ${theme.colors.main200};
  border-radius: 8px;
  background: ${theme.colors.white};
  overflow: hidden;
`;
