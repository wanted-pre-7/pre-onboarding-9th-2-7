import styled from "@emotion/styled";
import CartIcon from "../cart/CartIcon";

const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  color: white;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
`;

const IconStyle = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  color: black;
`;

const BadgeStyle = styled.span`
  background-color: blue;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 0.25rem;
  font-weight: bold;
  color: white;
`;

const HeaderCartButton = () => {
  return (
    <ButtonStyle>
      <IconStyle>
        <CartIcon />
      </IconStyle>
      <BadgeStyle>0</BadgeStyle>
    </ButtonStyle>
  );
};

export default HeaderCartButton;
