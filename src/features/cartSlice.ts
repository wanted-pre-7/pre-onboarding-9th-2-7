import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../type/product";

export interface IcartItem extends IProduct {
  quantity: number;
  priceSum: number;
}

interface InitialState {
  items: IcartItem[];
  totalQuantitiy: number;
  totalPrice: number;
}

const initialState: InitialState = {
  items: [],
  totalQuantitiy: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<IProduct>) => {
      const newItem = action.payload;
      const found = state.items.find((el) => newItem.idx === el.idx);
      if (!found) {
        state.items.push({ ...newItem, quantity: 1, priceSum: newItem.price });
        state.totalQuantitiy++;
        state.totalPrice += newItem.price;
      } else {
        found.quantity++;
        found.priceSum += newItem.price;
        state.totalPrice += newItem.price;
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice;
