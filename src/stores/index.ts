import { configureStore, createSlice } from '@reduxjs/toolkit';
import { count } from 'console';
import type { IProduct } from '../components/common/Product';

const initialReservationList: IProduct[] = [];
const initialPurchaseList: IPurchase[] = [];

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
      const { payload }: { payload: IProduct } = action;
      let copyState = [...state];
      copyState = copyState.filter((product) => product.idx !== payload.idx);
      return copyState;
    },
  },
});

const purchaseList = createSlice({
  name: 'purcharseList',
  initialState: initialPurchaseList,
  reducers: {
    add: (state, action) => {
      const { payload }: { payload: IPurchase } = action;
      const copyState = [...state];
      copyState.push(payload);
      return copyState;
    },
    count: (state, action) => {
      const { payload } = action;
      const copyState = [...state];
      return copyState.map((purchase) =>
        purchase.idx === payload
          ? { ...purchase, count: purchase.count + 1 }
          : { ...purchase },
      );
    },
    discount: (state, action) => {
      const { payload } = action;
      const copyState = [...state];
      return copyState.map((purchase) =>
        purchase.idx === payload
          ? { ...purchase, count: purchase.count - 1 }
          : { ...purchase },
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    reservationList: reservationList.reducer,
    purchaseList: purchaseList.reducer,
  },
});

export const reservationListActions = reservationList.actions;
export const purchaseListActions = purchaseList.actions;

export interface IState {
  reservationList: IProduct[];
  purchaseList: IPurchase[];
}

interface IPurchase {
  idx: number;
  price: number;
  maximumPurchases: number;
  count: number;
}
