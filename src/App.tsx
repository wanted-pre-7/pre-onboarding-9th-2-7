import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SkeletonUi from "./components/SkeletonUi";
import Main from "./pages/Main";
import Reservations from "./pages/Reservations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Navigate to="/main" /> },
      {
        path: "main",
        element: (
          <Suspense fallback={<SkeletonUi />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
