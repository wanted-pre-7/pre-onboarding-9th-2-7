import { useAppDispatch, useAppSelector } from "../app/hook";

const Cart = () => {
  const { cart } = useAppSelector((state) => state);
  console.log(cart);
  return (
    <div>
      <div>cart</div>
    </div>
  );
};

export default Cart;
