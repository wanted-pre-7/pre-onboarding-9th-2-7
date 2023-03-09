import { CART } from "../constant/cartConstant";
import { cartActions, type ICartItem } from "./cartSlice";

export const addSaveCartData = (newCart) => {
  return (dispatch, getState) => {
    dispatch(cartActions.addItemToCart(newCart));
    const { cart } = getState();
    sessionStorage.setItem(CART, JSON.stringify(cart));
  };
};

export const removeItemSaveCartData = (id: number) => {
  return (dispatch, getState) => {
    dispatch(cartActions.removeItemFromCart(id));
    const { cart } = getState();
    sessionStorage.setItem(CART, JSON.stringify(cart));
  };
};

export const removeSaveCartData = (id: number) => {
  return (dispatch, getState) => {
    dispatch(cartActions.removeFromCart(id));
    const { cart } = getState();
    sessionStorage.setItem(CART, JSON.stringify(cart));
  };
};
