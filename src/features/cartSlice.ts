import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../types";

export interface ICartItem extends IProduct {
  totalPrice: number;
  quantity: number;
}

interface ICartInitailState {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: ICartInitailState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.idx === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.idx !== id);
        state.totalQuantity--;
        state.totalPrice = state.totalPrice - existingItem.totalPrice;
      }
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.idx === newItem.idx);

      state.totalPrice = state.totalPrice + newItem.price;

      if (!existingItem) {
        state.items.push({
          idx: newItem.idx,
          mainImage: newItem.mainImage,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.name,
          quantity: 1,
          description: newItem.description,
          spaceCategory: newItem.spaceCategory,
          maximumPurchases: newItem.maximumPurchases,
          registrationDate: newItem.registrationDate,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.idx === id);

      if (existingItem) {
        state.totalPrice = state.totalPrice - existingItem?.price;

        if (existingItem.quantity === 1) {
          state.totalQuantity--;
          state.items = state.items.filter((item) => item.idx !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
