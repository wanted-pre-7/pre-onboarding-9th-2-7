import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/product";

const initialState = {
  product: {} as IProduct,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    readProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { readProduct } = productSlice.actions;

export default productSlice.reducer;
