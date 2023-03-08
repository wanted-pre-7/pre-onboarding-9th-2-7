import { Button, useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getProduct } from '../apis/main';
import FilterModal from '../components/common/FilterModal';
import type { IProduct } from '../components/common/Product';
import Main from '../components/Main';

const MainPage = () => {
  const [placeList, setPlaceList] = useState<string[]>([]);
  const { data, isLoading, isError, error } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: getProduct,
    onSuccess: (res) => {
      setProDuctData(res);
      setPlaceList(res.map((product) => product.spaceCategory));
    },
  });
  const [productData, setProDuctData] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{Object(error).message}</h2>;
  }

  return (
    <>
      <Button onClick={() => onOpen()}>필터</Button>
      <FilterModal
        isOpen={isOpen}
        onClose={onClose}
        setData={setProDuctData}
        placeList={[...new Set(placeList)]}
      />
      {productData?.map((product: IProduct) => (
        <Main key={product.idx} product={product} />
      ))}
    </>
  );
};

export default MainPage;
