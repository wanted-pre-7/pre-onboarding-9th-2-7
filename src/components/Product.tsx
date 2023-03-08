import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { IProduct } from "../type/product";

interface Props {
  productsData: IProduct;
}

const Product = ({ productsData }: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={productsData.mainImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{`${productsData.idx}. ${productsData.name}`}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {`${productsData.price.toLocaleString("ko-KR")}원`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            상세정보
          </Button>
          <Button variant="ghost" colorScheme="blue">
            장바구니 담기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Product;
