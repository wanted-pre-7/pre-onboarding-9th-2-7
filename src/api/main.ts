import { client } from "./instance";

export const getProductList = client.get("/products").then((res) => res.data);
