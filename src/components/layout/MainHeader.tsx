import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import type { RootState } from "../../app/store";
import GridSvg from "../../assets/svg/GridSvg";
import ResetSvg from "../../assets/svg/ResetSvg";
import ShopSvg from "../../assets/svg/ShopSvg";

interface IMainHeaderProps {
  filter?: {
    min: string;
    max: string;
    location: string;
  };
  handleChangeFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
  totalPrice?: number;
}

const MainHeader = ({
  filter,
  handleChangeFilter,
  handleReset,
  totalPrice = 0,
}: IMainHeaderProps) => {
  const mainMatch = useMatch("/main");
  const reservationMatch = useMatch("/reservations");
  const navigate = useNavigate();
  const { totalCnt } = useSelector<RootState, { totalCnt: number }>(
    (state) => state.reservation,
  );

  return (
    <HeaderWrapper>
      {filter ? (
        <InputWrapper>
          <NumberInputLabel>
            <span>가격</span>
            <Input
              type="number"
              placeholder="0"
              onChange={handleChangeFilter}
              name="min"
              value={filter.min}
            />
            ~
            <Input
              type="number"
              placeholder="0"
              onChange={handleChangeFilter}
              name="max"
              value={filter.max}
            />
          </NumberInputLabel>
          <TextInputLabel>
            <span>지역</span>
            <Input
              type="text"
              placeholder="서울"
              onChange={handleChangeFilter}
              name="location"
              value={filter.location}
            />
          </TextInputLabel>
          <ResetButton onClick={handleReset}>
            <ResetSvg />
          </ResetButton>
        </InputWrapper>
      ) : (
        <Price>총 결재액:{totalPrice}원</Price>
      )}

      <ButtonContainer>
        <Button isMatch={!!mainMatch} onClick={() => navigate("/main")}>
          <GridSvg />
        </Button>
        <Button
          isMatch={!!reservationMatch}
          onClick={() => navigate("/reservations")}
        >
          <CartCnt>{totalCnt}</CartCnt>
          <ShopSvg />
        </Button>
      </ButtonContainer>
    </HeaderWrapper>
  );
};

export default MainHeader;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  span {
    margin-right: 10px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const NumberInputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextInputLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 150px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  outline: none;
  &:focus {
    border-color: #4a9ef8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  border-radius: 10px;
`;

const Button = styled.button<{ isMatch?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: ${(props) =>
    props.isMatch ? "#4a9ef8" : "rgba(0,0,0,0.3)"};
  color: white;
  &:first-of-type {
    border-radius: 10px 0px 0px 10px;
  }
  &:last-of-type {
    border-radius: 0px 10px 10px 0px;
  }
`;

const ResetButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const Price = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const CartCnt = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 13px;
  background-color: #fb3131;
  color: white;

  border-radius: 50%;
  top: -10px;
  right: -10px;
`;
