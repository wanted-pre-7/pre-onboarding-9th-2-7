import request from "./instance";

export const getProducts = async () => {
  const { data } = await request.get("/products");
  return data;
};
