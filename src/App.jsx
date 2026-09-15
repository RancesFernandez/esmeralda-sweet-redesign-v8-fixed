import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Inicio from './pages/Inicio';
import MenuDulce from './pages/MenuDulce/MenuDulce';
import MenuSalado from './pages/MenuSalado/MenuSalado';
import MenuDesayunos from './pages/MenuDesayunos/MenuDesayunos';
import Navbar from './components/Navbar/Navbar';
import MobileOrderBar from './components/MobileOrderBar/MobileOrderBar';
import { Analytics } from '@vercel/analytics/react';
 
export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}

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
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu-dulce" element={<MenuDulce />} />
        <Route path="/menu-salado" element={<MenuSalado />} />
        <Route path="/desayunos" element={<MenuDesayunos />} />
      </Routes>

      <MobileOrderBar />
    </>
  );
}
