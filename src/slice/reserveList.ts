import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../types";

const initialReserveList: IProduct[] = [];

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
  },
});

export default reserveList;

export const reserveActions = reserveList.actions;
