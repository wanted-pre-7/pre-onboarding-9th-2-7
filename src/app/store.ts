import type { Middleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { CART } from "../constant/cartConstant";
import cartReducer from "../features/cartSlice";

//MIDDLEWARE
const sessionStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    sessionStorage.setItem(CART, JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  console.log(sessionStorage.getItem(CART));
  if (sessionStorage.getItem(CART)) {
    return JSON.parse(sessionStorage.getItem(CART) as string);
  }
};

const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
