import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/reservations" element={<Cart />}></Route>
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
