import type { Middleware } from "@reduxjs/toolkit";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reserveList from "../features/reserveList";

const sessionStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    sessionStorage.setItem("Cart", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (sessionStorage.getItem("Cart")) {
    return JSON.parse(sessionStorage.getItem("Cart"));
  }
};

const store = configureStore({
  reducer: {
    reserveList: reserveList.reducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
