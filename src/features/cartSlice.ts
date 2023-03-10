import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProductType } from "../types/product";

export interface ICartStateType extends IProductType {
  qty: number;
}

const initialState: ICartStateType[] = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // addItems: (state, action: PayloadAction<ICartStateType[]>) => {
    //   return;
    // },
    addItem: (state, action: PayloadAction<IProductType>) => {
      state.push({ ...action.payload, qty: 1 });
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const newState = state.filter((el) => el.idx !== action.payload);
      return newState;
    },
    updateItem: (state, action: PayloadAction<ICartStateType>) => {
      const newState = state.map((el) =>
        el.idx === action.payload.idx
          ? { ...el, qty: action.payload.qty }
          : { ...el },
      );
      return newState;
    },
  },
});

export const { addItem, deleteItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
