import styled from "@emotion/styled";
import { useMatch, useNavigate } from "react-router-dom";
import GridSvg from "../../assets/svg/GridSvg";
import ResetSvg from "../../assets/svg/ResetSvg";
import ShopSvg from "../../assets/svg/ShopSvg";

interface IMainHeaderProps {
  filter: {
    min: string;
    max: string;
    location: string;
  };
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

const MainHeader = ({
  filter,
  handleChangeFilter,
  handleReset,
}: IMainHeaderProps) => {
  const mainMatch = useMatch("/main");
  const reservationMatch = useMatch("/reservations");
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
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
  overflow: hidden;
`;

const Button = styled.button<{ isMatch?: boolean }>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isMatch ? "#4a9ef8" : "rgba(0,0,0,0.3)"};
  color: white;
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
