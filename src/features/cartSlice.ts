import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ICart } from "../types/product";

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ICart>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (
        itemInCart &&
        itemInCart.quantity! <= action.payload.maximumPurchases
      ) {
        itemInCart.quantity! += action.payload.quantity as number;
      } else {
        state.push(action.payload);
      }
    },
    incrementQuantity: (state, action: PayloadAction<ICart>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (itemInCart && itemInCart.quantity! <= action.payload.maximumPurchases)
        itemInCart.quantity! += 1;
    },
    decrementQuantity: (state, action: PayloadAction<ICart>) => {
      const itemInCart = state.find((item) => item.idx === action.payload.idx);
      if (itemInCart && itemInCart.quantity === 1) {
        itemInCart.quantity = 1;
      } else if (itemInCart) itemInCart.quantity! -= 1;
    },
    updateItem: (state, action: PayloadAction<ICart>) => {
      return state.map((item) =>
        item.idx === action.payload.idx
          ? { ...item, quantity: action.payload.quantity }
          : { ...item },
      );
    },
    removeItem: (state, action: PayloadAction<ICart>) => {
      return state.filter((item) => item.idx !== action.payload.idx);
    },
  },
});

export const {
  addCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  updateItem,
} = cartSlice.actions;
export default cartSlice.reducer;
