import { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import SkeletonUi from './components/SkeletonUi';
import MainPage from './pages/MainPage';
import ReservationPage from './pages/ReservationPage';

const Router = () => {
  return (
    <BrowserRouter>
      <NavList />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/reservations" element={<ReservationPage />} />
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
