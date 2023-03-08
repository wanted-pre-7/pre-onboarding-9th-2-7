import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IProduct {
  id: number;
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}
export interface IReservationProduct extends IProduct {
  cnt: number;
}

const ReadProducts = () => {
  return useQuery<IProduct[]>(
    ["products"],
    async () => {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  );
};

const AddReservation = () => {
  return useMutation(
    async (data: IReservationProduct) => {
      const response = await axios.post(`http://localhost:3000/reservations`, {
        ...data,
        id: data.idx,
      });
      return response;
    },
    {
      onError: () => alert("이미 예약한 상품입니다."),
    },
  );
};

const productApis = { ReadProducts, AddReservation };
export default productApis;
