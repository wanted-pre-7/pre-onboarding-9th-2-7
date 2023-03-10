import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProducts } from "../pages/Main";

export interface IInitial extends IProducts {
  quantity: number;
}

const initialState: IInitial[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state: IProducts[], action: PayloadAction<IProducts>) {
      state.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<IProducts>) {
      return state.filter((item) => item.idx !== action.payload.idx);
    },
    plusQuantity(state, action) {
      const existItemIndex = state.findIndex(
        (item) => item.idx === action.payload,
      );
      if (
        state[existItemIndex].maximumPurchases > state[existItemIndex].quantity
      )
        state[existItemIndex].quantity++;
    },
    minusQuantity(state, action) {
      const existItemIndex = state.findIndex(
        (item) => item.idx === action.payload,
      );
      if (state[existItemIndex].quantity > 1) {
        state[existItemIndex].quantity--;
      }
    },
  },
});

export const { addItem, deleteItem, plusQuantity, minusQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
