import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '../components/Product';

const initialReservationList: IProduct[] = [];

const reservationList = createSlice({
  name: 'reservationList',
  initialState: initialReservationList,
  reducers: {
    add: (state, action) => {
      const { payload }: { payload: IProduct } = action;
      const copyState = [...state];
      copyState.push(payload);
      return copyState;
    },
    delete: (state, action) => {
      const { payload } = action;
      return { ...state };
    },
    buyCount: (state, action) => {
      const { payload } = action;
      return { ...state };
    },
  },
});

export const store = configureStore({
  reducer: {
    reservationList: reservationList.reducer,
  },
});

export const reservationListActions = reservationList.actions;

export interface IState {
  reservationList: IProduct[];
}
