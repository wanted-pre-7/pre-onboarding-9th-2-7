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
    addItem: (state, action: PayloadAction<IProductType>) => {
      state.push({ ...action.payload, qty: 1 });
      sessionStorage.setItem("cart", JSON.stringify(state));
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const newState = state.filter((el) => el.idx !== action.payload);
      sessionStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    updateItem: (state, action) => {
      const newState = state.map((el) =>
        el.idx === action.payload.idx
          ? { ...el, qty: action.payload.qty }
          : { ...el },
      );
      sessionStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addItem, deleteItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
