import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import MainPage from "./pages/MainPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<MainPage />} />
    </>,
  ),
);
export default Router;
