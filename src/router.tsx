import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
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
        element: <Home />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
    ],
  },
]);

export default router;
