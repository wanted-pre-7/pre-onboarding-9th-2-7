import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Reservations from "./pages/Reservations";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
