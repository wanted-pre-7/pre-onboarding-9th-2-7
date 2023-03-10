/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAppSelector } from "../../app/hook";
import CartIcon from "./CartIcon";

const CartButton = () => {
  const cartItems = useAppSelector((state) => state.cart);
  return (
    <button css={buttonStyle}>
      <span css={iconStyle}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span css={badgeStyle}>{cartItems?.length}</span>
    </button>
  );
};

export default CartButton;

const buttonStyle = css`
  cursor: pointer;
  font: inherit;
  border: none;
  color: white;
  background-color: black;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
`;

const iconStyle = css`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const badgeStyle = css`
  padding: 0.25rem 0.75rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
  background-color: #38a169;
`;
