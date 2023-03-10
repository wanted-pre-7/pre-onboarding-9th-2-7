import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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

export default Router;
