import { createSlice } from "@reduxjs/toolkit";
import type { IReservationProduct } from "../../types/product";

const initialState = {
  reservationList: [] as IReservationProduct[],
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservationList.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.reservationList = state.reservationList.filter(
        (reservation) => reservation.idx !== action.payload.idx,
      );
    },
    editReservation: (state, action) => {
      const target = state.reservationList.find(
        (reservation) => reservation.idx === action.payload.idx,
      );
      if (target) target.cnt = action.payload.cnt;
    },
  },
});

export const { addReservation, removeReservation, editReservation } =
  reservationSlice.actions;

export default reservationSlice.reducer;
