import { CART } from "../constant/cartConstant";
import { cartActions } from "./cartSlice";

export const addSaveCartData = (newCart: {
  idx: number;
  price: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  maximumPurchases: number;
  registrationDate: string;
}) => {
  return (
    dispatch: (arg0: { payload: any; type: "cart/addItemToCart" }) => void,
    getState: () => { cart: any },
  ) => {
    dispatch(cartActions.addItemToCart(newCart));
    const { cart } = getState();
    sessionStorage.setItem(CART, JSON.stringify(cart));
  };
};

export const removeItemSaveCartData = (id: number) => {
  return (
    dispatch: (arg0: { payload: any; type: "cart/removeItemFromCart" }) => void,
    getState: () => { cart: any },
  ) => {
    dispatch(cartActions.removeItemFromCart(id));
    const { cart } = getState();
    sessionStorage.setItem(CART, JSON.stringify(cart));
  };
};

export const removeSaveCartData = (id: number) => {
  return (
    dispatch: (arg0: { payload: any; type: "cart/removeFromCart" }) => void,
    getState: () => { cart: any },
  ) => {
    dispatch(cartActions.removeFromCart(id));
    const { cart } = getState();
    sessionStorage.setItem(CART, JSON.stringify(cart));
  };
};
