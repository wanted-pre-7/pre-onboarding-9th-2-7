import {
  Badge,
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
} from "@chakra-ui/react";
import type { IProduct } from "../../types/product";

interface Props {
  product: IProduct;
  handleClickModal?: (idx: number) => void;
}

const ProductCard = ({ product, handleClickModal }: Props) => {
  return (
    <Card
      maxW="sm"
      key={product.idx}
      _hover={{
        shadow: "md",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "0.3s",
      }}
    >
      <CardBody>
        <Image src={product.mainImage} alt={product.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" wordBreak="keep-all">
            <Text display="inline-block">{product.idx}</Text>. {product.name}
          </Heading>
          <Text
            color="blue.600"
            fontSize="xl"
            display="flex"
            alignItems="center"
            // justifyContent="space-between"
            gap="4"
          >
            {product.price.toLocaleString()} 원
            <Badge p="2" borderRadius="md">
              {product.spaceCategory}
            </Badge>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleClickModal?.(product.idx)}
          >
            더보기
          </Button>
          <Button variant="ghost" colorScheme="blue">
            예약하기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
