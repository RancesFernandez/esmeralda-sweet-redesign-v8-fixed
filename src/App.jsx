import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import MenuDulce from './pages/MenuDulce';
import MenuSalado from './pages/MenuSalado';
import MenuDesayunos from './pages/MenuDesayunos';
import './App.css';
import { whatsappUrl } from './data/config';

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
      <div className="mobile-order-bar"><a href={whatsappUrl(`Hola Esmeralda Sweet 😊

Quisiera hacer una consulta para realizar un pedido.

Me gustaría conocer las opciones disponibles y recibir asesoramiento para elegir la propuesta que mejor se adapte a lo que necesito.

¡Gracias! 💚`)} target="_blank" rel="noreferrer">Hacer pedido por WhatsApp ↗</a></div>
    </>
  );
}
