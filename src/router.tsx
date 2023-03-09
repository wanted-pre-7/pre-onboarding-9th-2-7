import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import SkeletonUi from "./components/product/SkeletonUi";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="/main" replace />,
      },
      {
        path: "/main",
        element: (
          <Suspense fallback={<SkeletonUi />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
    ],
  },
]);

export default router;
