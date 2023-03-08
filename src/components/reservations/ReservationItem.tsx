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
} from "@chakra-ui/react";
import { useCallback } from "react";
import type { IReservationProduct } from "../../apis/product";
import productApis from "../../apis/product";
import NumberInput from "./NumberInput";

interface IReservation {
  reservation: IReservationProduct;
}

const ReservationItem = ({ reservation }: IReservation) => {
  const { mutate: removeReservation } = productApis.RemoveReservation();
  const { mutate: editReservation } = productApis.EditReservation(
    reservation.id,
  );
  const handleRemoveReservation = () => {
    removeReservation(reservation.id);
  };

  const handleEditReservation = useCallback((_: string, num: number) => {
    editReservation(num);
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
            {reservation.price}원
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
