import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useAppDispatch } from "../../hook";
import { reserveActions } from "../../slice/reserveList";
import type { IReserveProduct } from "../../types";

const ReserveItem = (item: IReserveProduct) => {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    count,
    maximumPurchases,
  } = item;

  const toast = useToast();
  const dispatch = useAppDispatch();

  const onRemoveProduct = () => {
    dispatch(reserveActions.delete(idx));
  };

  const onAddQuantity = () => {
    if (count < maximumPurchases) {
      dispatch(reserveActions.addCount(idx));
      return;
    }

    toast({
      title: `${name} 최대 구매 개수 초과`,
      description: `인 당 ${maximumPurchases}개만 구매할 수 있습니다.`,
      position: "top-right",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const onSubtractQuantity = () => {
    dispatch(reserveActions.subtractCount(idx));
  };

  return (
    <ReserveItemWrap
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={mainImage}
        alt={description}
      />

      <Stack>
        <CardBody>
          <Heading size="md">
            #{idx} [{spaceCategory}] {name}
          </Heading>

          <Text py="2">{description}</Text>
          <Text>{price.toLocaleString()}원</Text>
        </CardBody>

        <FooterWrap>
          <QuantityWrap>
            <NumberInput
              size="sm"
              maxW={20}
              defaultValue={count}
              min={1}
              max={maximumPurchases}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={onAddQuantity} />
                <NumberDecrementStepper onClick={onSubtractQuantity} />
              </NumberInputStepper>
            </NumberInput>
            {count === maximumPurchases && (
              <QuantityMessage>최대 수량이 담겨있습니다.</QuantityMessage>
            )}
          </QuantityWrap>
          <Button onClick={onRemoveProduct}>삭제</Button>
        </FooterWrap>
      </Stack>
    </ReserveItemWrap>
  );
};

const ReserveItemWrap = styled(Card)`
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;

const FooterWrap = styled(CardFooter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuantityWrap = styled.div``;

const QuantityMessage = styled.p`
  margin-top: 10px;
  color: red;
`;

export default ReserveItem;
