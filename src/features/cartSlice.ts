import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProductType } from "../types/product";

export interface IStateType extends IProductType {
  cnt: number;
}

const initialState: IStateType[] = [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state: IProductType[], action: PayloadAction<IStateType>) => {
      state.push(action.payload);
    },
    deleteItem: (state: IStateType[], action: PayloadAction<number>) => {
      return [...state].filter((el) => el.idx !== action.payload);
    },
    updateItem: (state, action) => {
      return [...state].map((el) =>
        el.idx === action.payload.idx
          ? { ...el, cnt: action.payload.cnt }
          : { ...el },
      );
    },
  },
});

export const { addItem, deleteItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
