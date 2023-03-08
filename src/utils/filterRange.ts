interface IFilter {
  min: string;
  max: string;
  price: number;
  location: string;
  spaceCategory: string;
}

const minRange = (min: string, price: number) => {
  if (!min) return true;
  return +min <= price;
};

const maxRange = (max: string, price: number) => {
  if (!max) return true;
  return price <= +max;
};

const locationRange = (location: string, spaceCategory: string) => {
  if (!location) return true;
  return spaceCategory.includes(location);
};

const filterRange = ({ min, max, price, location, spaceCategory }: IFilter) => {
  return (
    minRange(min, price) &&
    maxRange(max, price) &&
    locationRange(location, spaceCategory)
  );
};

export default filterRange;
