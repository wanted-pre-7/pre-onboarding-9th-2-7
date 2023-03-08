import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import Filter from "../main/Filter";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <HeaderWrap>
      <Logo src="src/assets/logo.png" alt="logo" />
      {currentPath === "/main" && <Filter />}
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 150px;
`;

export default Header;
