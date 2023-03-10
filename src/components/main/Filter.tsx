import type { Dispatch, SetStateAction } from "react";
import {
  Box,
  NumberInput,
  NumberInputField,
  Flex,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

interface FilterProps {
  minPrice: number;
  maxPrice: number;
  setPrice: Dispatch<SetStateAction<number[]>>;
  space: string[];
  setSpace: Dispatch<SetStateAction<string[]>>;
}

const Filter = ({
  minPrice,
  maxPrice,
  setPrice,
  space,
  setSpace,
}: FilterProps) => {
  const [spaceList, setSpaceList] = useState(space);

  const handleClick = (checked: boolean, location: string) => {
    if (checked) setSpace([...space, location]);
    else setSpace(space.filter((el) => el !== location));
  };
  return (
    <Box>
      <Flex>
        <NumberInput
          onChange={(value: string) => setPrice([Number(value), maxPrice])}
          value={minPrice}
        >
          <NumberInputField></NumberInputField>
        </NumberInput>
        {" ~ "}
        <NumberInput
          onChange={(value: string) => setPrice([minPrice, Number(value)])}
          value={maxPrice}
        >
          <NumberInputField></NumberInputField>
        </NumberInput>
      </Flex>
      <Stack direction={"row"}>
        {spaceList.map((el, idx) => (
          <Checkbox
            key={idx}
            isChecked={!!space.includes(el)}
            onChange={(e) => handleClick(e.target.checked, el)}
          >
            {el}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};

export default Filter;
