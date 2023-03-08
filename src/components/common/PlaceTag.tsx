import { Tag } from '@chakra-ui/react';
import { useState } from 'react';

const PlaceTag = ({
  place,
  handlePlace,
  selectPlace,
}: {
  place: string;
  handlePlace: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  selectPlace: Set<unknown>;
}) => {
  const [isClicked, setIsClicked] = useState(
    selectPlace.has(place) ? true : false,
  );
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handlePlace(e);
    setIsClicked((prev) => !prev);
  };

  return (
    <Tag
      onClick={(e) => handleClick(e)}
      size={'lg'}
      variant={isClicked ? 'solid' : 'outline'}
      key={place}
    >
      {place}
    </Tag>
  );
};

export default PlaceTag;
