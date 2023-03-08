import styled from "@emotion/styled";
import Header from "./Header";

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
