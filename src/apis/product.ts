import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export interface IProduct {
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
  id: number;
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
      refetchOnMount: false,
      staleTime: Infinity,
    },
  );
};

const ReadReservations = () => {
  return useQuery<IReservationProduct[]>(
    ["reservations"],
    async () => {
      const response = await axios.get("http://localhost:3000/reservations");
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
      });
      return response;
    },
    {
      onError: () => alert("이미 예약한 상품입니다."),
    },
  );
};

const EditReservation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (cnt: number) => {
      const response = await axios.patch(
        `http://localhost:3000/reservations/${id}`,
        { cnt },
      );
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["reservations"]),
    },
  );
};

const RemoveReservation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: number) => {
      const response = await axios.delete(
        `http://localhost:3000/reservations/${id}`,
      );
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["reservations"]),
    },
  );
};

const productApis = {
  ReadProducts,
  ReadReservations,
  AddReservation,
  RemoveReservation,
  EditReservation,
};
export default productApis;
