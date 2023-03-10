import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import SkeletonList from "./components/SkeletonList";
import SkeletonUi from "./components/SkeletonUi";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" />} />
        <Route
          path="/main"
          element={
            <Suspense fallback={<SkeletonUi />}>
              <MainPage />
            </Suspense>
          }
        />
        <Route path="/reservations" element={<CartPage />} />
      </Route>
    </>,
  ),
);
export default Router;
