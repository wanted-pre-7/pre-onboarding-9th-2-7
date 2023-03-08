const minRange = (min: string, price: number) => {
  if (!min) return true;
  return +min <= price;
};

const maxRange = (max: string, price: number) => {
  if (!max) return true;
  return price <= +max;
};

const locationRange = (location: string, compareLocation: string) => {
  if (!location) return true;
  return compareLocation.includes(location);
};

const filterRange = { minRange, maxRange, locationRange };
export default filterRange;
