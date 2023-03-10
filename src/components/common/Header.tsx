import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hook";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const reserveList = useAppSelector((state) => state.reserveList);

  const goToCart = () => {
    navigate("/reservations");
  };

  return (
    <HeaderWrap>
      <Logo src="src/assets/logo.png" alt="logo" />
      {currentPath === "/main" && (
        <HeaderRight>
          <CartWrap>
            <CartIcon
              onClick={goToCart}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </CartIcon>
            <CartAmount>{reserveList.length}</CartAmount>
          </CartWrap>
        </HeaderRight>
      )}
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

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
`;

const CartWrap = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.svg`
  position: absolute;
  width: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

const CartAmount = styled.span`
  position: relative;
  left: 50px;
  bottom: 10px;
  font-weight: bold;
  color: blue;
`;

export default Header;
