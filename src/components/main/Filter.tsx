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
import { PRICE_VALUE, SPACE_VALUE } from "../../constants/selectValue";

type PropsType = {
  minPrice: number;
  maxPrice: number;
  spaces: string[];
  setPrice: Dispatch<SetStateAction<number[]>>;
  setSpaces: Dispatch<SetStateAction<string[]>>;
};

const Filter = ({
  minPrice,
  maxPrice,
  spaces,
  setPrice,
  setSpaces,
}: PropsType) => {
  const MAX_VALUE = Math.max(...PRICE_VALUE);
  const MIN_VALUE = Math.min(...PRICE_VALUE);

  useEffect(() => {
    const idArr: string[] = [];
    SPACE_VALUE.map((el) => idArr.push(el));
    setSpaces(idArr);
  }, []);

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArr: string[] = [];
      SPACE_VALUE.map((el) => idArr.push(el));
      setSpaces(idArr);
    } else setSpaces([]);
  };

  const handleSingleCheck = (checked: boolean, space: string) => {
    if (checked) setSpaces([...spaces, space]);
    else setSpaces(spaces.filter((el) => el !== space));
  };

  return (
    <Box
      // minW="500px"
      display="flex"
      flexDir="column"
      p={{ sm: "12px", md: "16px" }}
      bg="gray.50"
      border="1px"
      borderColor="gray.100"
      borderRadius="4px"
      m={["0px", "auto"]}
    >
      <Container>
        <Text fontSize="15px" as="b">
          가격 <br />
          <Box as="span" fontSize="13px" fontWeight="normal">
            ({minPrice.toLocaleString()}원 ~ {maxPrice.toLocaleString()}원)
          </Box>
        </Text>
        <Container mt="10px">
          <RangeSlider
            onChangeEnd={([min, max]) => setPrice([min, max])}
            colorScheme="blue"
            defaultValue={[MIN_VALUE, MAX_VALUE]}
            min={MIN_VALUE}
            max={MAX_VALUE}
            step={5000}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
        </Container>
      </Container>
      <Container mt="10px">
        <Text fontSize="15px" as="b">
          지역
        </Text>
        <Box
          mt="10px"
          display="flex"
          flexDirection={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          gap="2"
        >
          <Checkbox
            size="sm"
            colorScheme="blue"
            flexShrink="0"
            value="전체"
            isChecked={spaces.length === SPACE_VALUE.length}
            onChange={(e) => handleAllCheck(e.target.checked)}
          >
            전체
          </Checkbox>
          {SPACE_VALUE.map((space) => (
            <Checkbox
              key={space}
              size="sm"
              flexShrink="0"
              colorScheme="blue"
              value={space}
              isChecked={spaces.includes(space)}
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
