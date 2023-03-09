import { Spinner } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import theme from "../utils/theme";

const Loader = () => {
  return (
    <Container>
      <Spinner size="xl" color={theme.colors.point200} />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
