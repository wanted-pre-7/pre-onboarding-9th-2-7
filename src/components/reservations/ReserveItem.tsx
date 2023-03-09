import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
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
    maximumPurchases,
    registrationDate,
    count,
  } = item;

  const dispatch = useAppDispatch();

  const onRemoveProduct = () => {
    dispatch(reserveActions.delete(idx));
  };

  const onAddQuantity = () => {
    dispatch(reserveActions.addCount(idx));
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
        </CardBody>

        <FooterWrap>
          <div>
            <QuantityWrap onClick={onAddQuantity}>+</QuantityWrap>
            <span>{count}</span>
            <QuantityWrap onClick={onSubtractQuantity}>-</QuantityWrap>
          </div>
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
`;

const QuantityWrap = styled.div`
  display: inline-block;
  margin: 0 20px;
  padding: 0 5px;
  border: 1px solid #767676;
  cursor: pointer;
`;

export default ReserveItem;
