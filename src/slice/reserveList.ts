import { createSlice } from "@reduxjs/toolkit";
import type { IReserveProduct } from "../types";

const initialReserveList: IReserveProduct[] = [];

const reserveList = createSlice({
  name: "reserveList",
  initialState: initialReserveList,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    delete: (state, action) => {
      return state.filter((product) => product.idx !== action.payload);
    },
    addCount: (state, action) => {
      const productIndex = state.findIndex(
        (product) => product.idx === action.payload,
      );
      state[productIndex].count++;
    },
    subtractCount: (state, action) => {
      const productIndex = state.findIndex(
        (product) => product.idx === action.payload,
      );
      state[productIndex].count--;
    },
  },
});

export default reserveList;

export const reserveActions = reserveList.actions;
