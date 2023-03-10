import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { sessionStorageMiddleware } from "./middleware";
const reHydrateStore = () => {
  if (sessionStorage.getItem("cart") !== null) {
    return JSON.parse(sessionStorage.getItem("cart") as string);
  }
};
const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
