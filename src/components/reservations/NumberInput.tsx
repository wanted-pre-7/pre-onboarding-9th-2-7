import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import React from "react";

interface INumberInput {
  cnt: number;
  maximumPurchases: number;
  onChange: (_: string, num: number) => void;
}

const NumberInput = ({ cnt, maximumPurchases, onChange }: INumberInput) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: cnt,
      min: 1,
      max: maximumPurchases,
      onChange,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack maxW="160px">
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

export default NumberInput;
