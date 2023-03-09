import { useToast } from "@chakra-ui/react";
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
  const toast = useToast();
  return useMutation(
    async (data: IReservationProduct) => {
      const response = await axios.post(`${SERVER_URL}/reservations`, {
        ...data,
      });
      return response;
    },
    {
      onSuccess: () =>
        toast({
          title: "예약 되었습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        }),
      onError: () =>
        toast({
          title: "이미 예약된 상품입니다.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        }),
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
  const toast = useToast();
  return useMutation(
    async (id: number) => {
      const response = await axios.delete(`${SERVER_URL}/reservations/${id}`);
      return response;
    },
    {
      onSuccess: () => {
        toast({
          title: "상품 예약이 삭제되었습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
        queryClient.invalidateQueries(["reservations"]);
      },
      onError: () =>
        toast({
          title: "상품 예약 삭제에 실패하였습니다.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        }),
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
