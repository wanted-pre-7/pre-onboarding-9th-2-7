import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/reservations" element={<CartPage />} />
      </Route>
    </>,
  ),
);
export default Router;

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
