import { useAppDispatch, useAppSelector } from "../app/hook";

const Cart = () => {
  const cartList = useAppSelector((state) => state.cart);
  console.log(cartList);
  return (
    <div>
      <div>cart</div>
    </div>
  );
};

export default Cart;
