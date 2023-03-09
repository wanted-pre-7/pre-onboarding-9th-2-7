import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IProductType } from '../types/product';

export interface IStateType extends IProductType {
  cnt: number;
}

const initialState: IStateType[] = [];

const cartSlice = createSlice({
  name: 'cartSlice',
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

const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const cartSliceAciton = cartSlice.actions;

export default store;
