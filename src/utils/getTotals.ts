import type { ICart } from "../types/product";

export const getTotal = (cart: ICart[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalQuantity, totalPrice };
};
