import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProducts } from "../pages/Main";

const initialState: IProducts[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action: PayloadAction<IProducts>) {
      state.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<IProducts>) {
      return state.filter((item) => item.idx !== action.payload.idx);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
