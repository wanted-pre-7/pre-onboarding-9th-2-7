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
    getSessionItem: (state, action: PayloadAction<IStateType[]>) => {
      state = [...action.payload];
      return state;
    },
    addItem: (state: IStateType[], action: PayloadAction<IStateType>) => {
      state.push({ ...action.payload, cnt: 1 });
      sessionStorage.setItem('cart', JSON.stringify(state));
    },
    deleteItem: (state: IStateType[], action: PayloadAction<number>) => {
      const newState = state.filter((el) => el.idx !== action.payload);
      sessionStorage.setItem('cart', JSON.stringify(newState));
    },
    updateItem: (state, action) => {
      const newState = [...state].map((el) =>
        el.idx === action.payload.idx
          ? { ...el, cnt: action.payload.cnt }
          : { ...el },
      );
      sessionStorage.setItem('cart', JSON.stringify(newState));
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
