import type { ICartStateType } from "../features/cartSlice";

const getTotalPrice = (cartItems: ICartStateType[]) =>
  cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

export default getTotalPrice;
