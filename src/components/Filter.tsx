import {
  Box,
  Checkbox,
  Container,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import theme from "../utils/theme";

type PropsType = {
  minPrice: number;
  maxPrice: number;
  selectSpaces: string[];
  spaceList: string[];
  setPrice: Dispatch<SetStateAction<number[]>>;
  setSelectSpaces: Dispatch<SetStateAction<string[]>>;
};

const Filter = ({
  minPrice,
  maxPrice,
  selectSpaces,
  spaceList,
  setPrice,
  setSelectSpaces,
}: PropsType) => {
  useEffect(() => {
    let idArr: string[] = [];
    spaceList.map((el) => idArr.push(el));
    setSelectSpaces(idArr);
  }, []);

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      let idArr: string[] = [];
      spaceList.map((el) => idArr.push(el));
      setSelectSpaces(idArr);
    } else setSelectSpaces([]);
  };

  const handleSingleCheck = (checked: boolean, space: string) => {
    if (checked) setSelectSpaces([...selectSpaces, space]);
    else setSelectSpaces(selectSpaces.filter((el) => el !== space));
  };

  const min = 0;
  const max = 30000;

  return (
    <Box
      maxW="600px"
      display="flex"
      flexDir="column"
      m={["0px", "auto"]}
      p="15px"
      bg={theme.colors.main100}
      border="1px"
      borderColor={theme.colors.main200}
      borderRadius="8px"
    >
      <Container>
        <Text as="b" fontSize={theme.sizes.s}>
          가격 선택 <br />
          <Box as="span" fontSize={theme.sizes.xs} fontWeight="normal">
            ({minPrice.toLocaleString("ko-kr")}원 ~{" "}
            {maxPrice.toLocaleString("ko-kr")}원)
          </Box>
        </Text>
        <Container mt="10px">
          <RangeSlider
            aria-label={["min", "max"]}
            onChangeEnd={(val) => setPrice([...val])}
            colorScheme="cyan"
            defaultValue={[min, max]}
            min={min}
            max={max}
            step={5000}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={5} index={0} />
            <RangeSliderThumb boxSize={5} index={1} />
          </RangeSlider>
        </Container>
      </Container>
      <Container mt="10px">
        <Text as="b" fontSize={theme.sizes.s}>
          지역 선택
        </Text>
        <Box mt="10px" display="flex" justifyContent="space-around">
          <Checkbox
            size="sm"
            colorScheme="cyan"
            value="전체"
            isChecked={selectSpaces.length === spaceList.length}
            onChange={(e) => handleAllCheck(e.target.checked)}
          >
            전체
          </Checkbox>
          {spaceList.map((space) => (
            <Checkbox
              key={space}
              size="sm"
              colorScheme="cyan"
              value={space}
              isChecked={!!selectSpaces.includes(space)}
              onChange={(e) => handleSingleCheck(e.target.checked, space)}
            >
              {space}
            </Checkbox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Filter;
