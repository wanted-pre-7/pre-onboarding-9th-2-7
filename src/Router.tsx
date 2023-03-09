import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SkeletonUi from "./components/skeleton/SkeletonUi";

import Reservations from "./pages/Reservations";

const Main = lazy(() => import("./pages/Main"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/main"
          element={
            <Suspense fallback={<SkeletonUi />}>
              <Main />
            </Suspense>
          }
        />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
