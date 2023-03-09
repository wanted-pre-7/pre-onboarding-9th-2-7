import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/features/productSlice";
import reservationSlice from "../components/features/reservationSlice";
// ...

const store = configureStore({
  reducer: {
    product: productSlice,
    reservation: reservationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
