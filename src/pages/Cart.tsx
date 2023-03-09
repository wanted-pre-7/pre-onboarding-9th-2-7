import { useAppDispatch, useAppSelector } from "../app/hook";

import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const { cart } = useAppSelector((state) => state);
  console.log(cart);
  return (
    <div>
      {cart.items.map((el) => (
        <CartItem key={el.idx} cartItem={el} />
      ))}
    </div>
  );
};

export default Cart;
