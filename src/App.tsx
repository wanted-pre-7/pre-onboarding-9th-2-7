import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SkeletonUi from "./components/SkeletonUi";
import Main from "./pages/Main";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/main" /> },
  {
    path: "/main",
    element: (
      <Suspense fallback={<SkeletonUi />}>
        <Main />
      </Suspense>
    ),
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
