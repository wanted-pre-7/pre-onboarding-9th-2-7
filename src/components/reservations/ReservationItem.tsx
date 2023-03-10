import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import type { IReservationProduct } from "../../types/product";
import calculatePrice from "../../utils/calcutePrice";
import {
  editReservation,
  removeReservation,
} from "../features/reservationSlice";
import NumberInput from "./NumberInput";

interface IReservationItem {
  reservation: IReservationProduct;
}

const ReservationItem = ({ reservation }: IReservationItem) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleRemoveReservation = () => {
    dispatch(removeReservation(reservation));
    toast({
      title: "상품 예약이 삭제되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const handleEditReservation = useCallback((_: string, num: number) => {
    dispatch(editReservation({ ...reservation, cnt: num }));
    if (reservation.maximumPurchases === num) {
      toast({
        title: `해당 상품의 최대 수량은 ${reservation.maximumPurchases}개 입니다.`,
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  }, []);

  return (
    <Card
      w={"full"}
      h={"full"}
      maxW={"400px"}
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"xl"}
      rounded={"lg"}
      zIndex={1}
      display="flex"
      flexDirection="column"
    >
      <CardBody w="full" display="flex" flexDirection="column">
        <Heading
          fontSize="lg"
          mb="2"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {reservation.idx}. {reservation.name}
        </Heading>

        <Image
          rounded={"lg"}
          objectFit={"cover"}
          src={reservation.mainImage}
          mb={2}
        />
        <Stack>
          <Text fontSize="sm">{reservation.spaceCategory}</Text>
          <Text fontSize="lg" fontWeight="semibold">
            {calculatePrice(reservation.price, reservation.cnt)}원
          </Text>
        </Stack>
      </CardBody>
      <Divider color="lightgray" />
      <CardFooter w="full">
        <ButtonGroup display="flex" justifyContent="space-between" w="full">
          <NumberInput
            cnt={reservation.cnt}
            maximumPurchases={reservation.maximumPurchases}
            onChange={handleEditReservation}
          />
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={handleRemoveReservation}
          >
            삭제하기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ReservationItem;
