import styled from "@emotion/styled";
import { useMatch, useNavigate } from "react-router-dom";
import GridSvg from "../../assets/svg/GridSvg";
import ShopSvg from "../../assets/svg/ShopSvg";

const Header = () => {
  const mainMatch = useMatch("/main");
  const reservationMatch = useMatch("/reservations");
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <ButtonContainer>
        <Button isMatch={!!mainMatch} onClick={() => navigate("/main")}>
          <GridSvg />
        </Button>
        <Button
          isMatch={!!reservationMatch}
          onClick={() => navigate("/reservations")}
        >
          <ShopSvg />
        </Button>
      </ButtonContainer>
    </HeaderWrapper>
  );
};

export default Header;

const ButtonContainer = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const Button = styled.button<{ isMatch: boolean }>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isMatch ? "#4a9ef8" : "rgba(0,0,0,0.3)"};
  color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
