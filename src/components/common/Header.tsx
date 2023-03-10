/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <>
      <header css={headerStyle}>
        <div>
          <Link to="/main">
            <h2>Like a local</h2>
          </Link>
          <Link to="/reservations">
            <CartButton />
          </Link>
        </div>
      </header>
    </>
  );
};

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.762);
  backdrop-filter: blur(30px);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(78, 78, 78, 0.25);
  z-index: 10;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px 0 20px;
  }
`;

export default Header;
