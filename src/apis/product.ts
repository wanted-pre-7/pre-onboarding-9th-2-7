import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { IProduct, IReservationProduct } from "../types/product";

const SERVER_URL = "http://localhost:3000";

const ReadProducts = () => {
  return useQuery<IProduct[]>(
    ["products"],
    async () => {
      const response = await axios.get(`${SERVER_URL}/products`);
      return response.data;
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
      suspense: true,
    },
  );
};

const ReadReservations = () => {
  return useQuery<IReservationProduct[]>(
    ["reservations"],
    async () => {
      const response = await axios.get(`${SERVER_URL}/reservations`);
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
      const response = await axios.post(`${SERVER_URL}/reservations`, {
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
      const response = await axios.patch(`${SERVER_URL}/reservations/${id}`, {
        cnt,
      });
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
      const response = await axios.delete(`${SERVER_URL}/reservations/${id}`);
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
