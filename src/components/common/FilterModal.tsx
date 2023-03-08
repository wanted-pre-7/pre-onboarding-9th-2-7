import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useGetOriginProducts } from '../../apis/main';
import PlaceTag from './PlaceTag';
import type { IProduct } from './Product';

const FilterModal = ({
  isOpen,
  onClose,
  setData,
  placeList,
}: {
  isOpen: boolean;
  onClose: () => void;
  setData: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>;
  placeList: string[];
}) => {
  const { data: originData } = useGetOriginProducts();

  const min = 0;
  const max = 30000;
  const [priceValue, setPriceValue] = useState([min, max]);
  const handlePrice = (priceRange: number[]) => {
    setPriceValue([...priceRange]);
  };
  const [editMin, editMax] = priceValue;

  const [selectPlace, setSelectPlace] = useState(new Set());
  const handlePlace = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const eventTarget = event.target as HTMLElement;
    const { innerText } = eventTarget;

    if (selectPlace.has(innerText)) {
      selectPlace.delete(innerText);
      setSelectPlace(selectPlace);
    } else {
      selectPlace.add(innerText);
      setSelectPlace(selectPlace);
    }
  };

  const handleSubmit = () => {
    onClose();
    const newData = originData?.filter(
      (product: IProduct) =>
        product.price >= editMin &&
        product.price <= editMax &&
        selectPlace.has(product.spaceCategory),
    );
    setData(newData);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>필터</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <h2>가격</h2>
              <RangeSlider
                aria-label={['min', 'max']}
                defaultValue={[min, max]}
                min={min}
                max={max}
                onChange={(val) => handlePrice(val)}
                step={1000}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0}>
                  <Box />
                </RangeSliderThumb>
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <div>{`${editMin} ~ ${editMax}`}</div>
            </div>
            <div>
              <h2>공간</h2>
              <HStack spacing={4}>
                {placeList.map((place) => (
                  <PlaceTag
                    key={place}
                    place={place}
                    selectPlace={selectPlace}
                    handlePlace={handlePlace}
                  />
                ))}
              </HStack>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
