import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Main from "./pages/Main";
import Reservations from "./pages/Reservations";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
