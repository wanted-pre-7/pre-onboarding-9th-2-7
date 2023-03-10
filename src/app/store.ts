import { configureStore } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import productSlice from "../components/features/productSlice";
import reservationSlice from "../components/features/reservationSlice";
// ...

const sessionStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    sessionStorage.setItem("CART", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  console.log(sessionStorage.getItem("CART"));
  if (sessionStorage.getItem("CART")) {
    return JSON.parse(sessionStorage.getItem("CART") as string);
  }
};

const store = configureStore({
  reducer: {
    product: productSlice,
    reservation: reservationSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
