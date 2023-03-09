import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={"/main"} />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/reservations" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
