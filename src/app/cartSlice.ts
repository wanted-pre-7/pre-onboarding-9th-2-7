import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProducts } from "../pages/Main";

const initialState: IProducts[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action: PayloadAction<IProducts>) {
      const existItem = state.find((item) => item.idx === action.payload.idx);

      if (existItem) {
        existItem.quantity! += 1;
      } else {
        state.push({ ...action.payload });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
