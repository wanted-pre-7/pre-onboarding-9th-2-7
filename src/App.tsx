import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "./app/hook";
import Header from "./components/common/Header";
import { CART } from "./constant/cartConstant";
import { cartActions } from "./features/cartSlice";
const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cart = sessionStorage.getItem(CART);
    if (cart) {
      dispatch(cartActions.replaceCart(JSON.parse(cart)));
    }
  }, [dispatch]);

  return (
    <Box minHeight="calc(100vh)">
      <Header />
      <Outlet />
    </Box>
  );
};
export default App;
