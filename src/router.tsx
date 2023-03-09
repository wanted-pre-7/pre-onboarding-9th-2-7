import { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import SkeletonUi from './components/SkeletonUi';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/reservations" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
        <Route
          path="/main"
          element={
            <Suspense fallback={<SkeletonUi />}>
              <MainPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const NavList = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/main">메인 페이지</NavLink>
        </li>
        <li>
          <NavLink to="/reservations">장바구니</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Router;
