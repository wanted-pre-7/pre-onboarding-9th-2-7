import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../types/product";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
