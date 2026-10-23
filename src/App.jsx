import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar/Navbar';
import MobileOrderBar from './components/MobileOrderBar/MobileOrderBar';
import SiteFooter from './components/home/SiteFooter/SiteFooter';

const MenuDulce = lazy(() => import('./pages/MenuDulce/MenuDulce'));
const MenuSalado = lazy(() => import('./pages/MenuSalado/MenuSalado'));
const MenuDesayunos = lazy(() => import('./pages/MenuDesayunos/MenuDesayunos'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <Navbar />

      <Suspense
        fallback={
          <div className="route-loading" role="status" aria-live="polite">
            Cargando menú…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu-dulce" element={<MenuDulce />} />
          <Route path="/menu-salado" element={<MenuSalado />} />
          <Route path="/desayunos" element={<MenuDesayunos />} />
        </Routes>
      </Suspense>

      <SiteFooter />
      <MobileOrderBar />

      <Analytics />
      <SpeedInsights />
    </>
  );
}