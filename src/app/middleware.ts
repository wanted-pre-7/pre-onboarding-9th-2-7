import type { Middleware } from "@reduxjs/toolkit";

export const sessionStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    sessionStorage.setItem("cart", JSON.stringify(getState()));
    return result;
  };
};
