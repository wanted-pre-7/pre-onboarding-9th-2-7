import { createSlice } from "@reduxjs/toolkit";
import type { IReservationProduct } from "../../types/product";

const initialState = {
  reservationList: [] as IReservationProduct[],
  totalCnt: 0,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservationList.push(action.payload);
      state.totalCnt = ++state.totalCnt;
    },
    removeReservation: (state, action) => {
      state.reservationList = state.reservationList.filter(
        (reservation) => reservation.idx !== action.payload.idx,
      );
      state.totalCnt = state.totalCnt - action.payload.cnt;
    },
    editReservation: (state, action) => {
      const target = state.reservationList.find(
        (reservation) => reservation.idx === action.payload.idx,
      );
      if (target) {
        state.totalCnt = state.totalCnt - target.cnt + action.payload.cnt;
        target.cnt = action.payload.cnt;
      }
    },
  },
});

export const { addReservation, removeReservation, editReservation } =
  reservationSlice.actions;

export default reservationSlice.reducer;
