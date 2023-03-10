import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../types";

export interface ICartItem extends IProduct {
  quantity: number;
  totalPrice: number;
}

const initialState: ICartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.idx === newItem.idx);
      if (!existingItem) {
        state.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    updateItem: (state, action) => {
      const newState = state.map((el) =>
        el.idx === action.payload.idx
          ? {
              ...el,
              quantity: action.payload.quantity,
              totalPrice: action.payload.quantity * action.payload.price,
            }
          : { ...el },
      );
      return newState;
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.idx !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
