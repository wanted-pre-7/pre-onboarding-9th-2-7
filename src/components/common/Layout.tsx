import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <MainWrap>
      <HeaderWrap />
      <InnerWrap>
        <Outlet />
      </InnerWrap>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 10%;
  place-self: start auto;
  border-bottom: 1px solid #767676;
`;

const InnerWrap = styled.div`
  position: absolute;
  width: 85%;
  height: 100%;
`;

export default Layout;
