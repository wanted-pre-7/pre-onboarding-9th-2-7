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
import { Suspense } from "react";
import SkeletonList from "./components/SkeletonList";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" />} />
        <Route
          path="/main"
          element={
            <Suspense fallback={<SkeletonList />}>
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

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
