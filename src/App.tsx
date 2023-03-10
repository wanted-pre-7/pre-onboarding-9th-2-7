import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import SkeletonUi from "./components/main/SkeletonUi";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={"/main"} />}></Route>
          <Route
            path="/main"
            element={
              <Suspense fallback={<SkeletonUi />}>
                <Main />
              </Suspense>
            }
          ></Route>
          <Route path="/reservations" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
