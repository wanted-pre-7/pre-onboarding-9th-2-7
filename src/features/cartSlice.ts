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
    removeCartItem: (state, action: PayloadAction<IcartItem>) => {
      state.items = state.items.filter((el) => el.idx !== action.payload.idx);
      state.totalQuantitiy = state.items.length;
      state.totalPrice -= action.payload.priceSum;
    },
    decreaseQuantity: (state, action: PayloadAction<IcartItem>) => {
      const item = state.items.find((el) => action.payload.idx === el.idx);
      item!.quantity--;
      item!.priceSum -= item!.price;
    },
  },
});

export const { addCartItem, removeCartItem, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice;
