const BASE_URL = `http://localhost:3000/data/data.json`;

export const fetchProducts = async () => {
  const response = await (await fetch(`${BASE_URL}`)).json();
  return response;
};
