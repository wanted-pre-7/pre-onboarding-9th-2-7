import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../type/product";

export interface IcartItem extends IProduct {
  quantity: number;
  priceSum: number;
}

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice;
