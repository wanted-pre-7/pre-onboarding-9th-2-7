import {
  Box,
  Checkbox,
  Container,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';

type PropsType = {
  minPrice: number;
  maxPrice: number;
  spaceList: string[];
  spaces: string[];
  setPrice: Dispatch<SetStateAction<number[]>>;
  setSpaces: Dispatch<SetStateAction<string[]>>;
};

const Filter = ({
  minPrice,
  maxPrice,
  spaceList,
  spaces,
  setPrice,
  setSpaces,
}: PropsType) => {
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArr: string[] = [];
      spaceList.map((el) => idArr.push(el));
      setSpaces(idArr);
    } else setSpaces([]);
  };

  const handleSingleCheck = (checked: boolean, space: string) => {
    if (checked) setSpaces([...spaces, space]);
    else setSpaces(spaces.filter((el) => el !== space));
  };

  return (
    <Box
      maxW="600px"
      display="flex"
      flexDir="column"
      p="15px"
      bg="gray.50"
      border="1px"
      borderColor="gray.100"
      borderRadius="4px"
      m={['0px', 'auto']}
    >
      <Container>
        <Text fontSize="15px" as="b">
          가격 <br />
          <Box as="span" fontSize="13px" fontWeight="normal">
            ({minPrice.toLocaleString('ko-kr')}원 ~{' '}
            {maxPrice.toLocaleString('ko-kr')}원)
          </Box>
        </Text>
        <Container mt="10px">
          <RangeSlider
            onChangeEnd={([min, max]) => setPrice([min, max])}
            colorScheme="cyan"
            defaultValue={[0, 30000]}
            min={0}
            max={30000}
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
        <Box mt="10px" display="flex" justifyContent="space-around">
          <Checkbox
            size="sm"
            colorScheme="cyan"
            value="전체"
            isChecked={spaces.length === spaceList.length}
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
              isChecked={!!spaces.includes(space)}
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
