import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { whatsappUrl } from '../data/config';
import CotizacionRapida from './CotizacionRapida';
import { imagenes } from '../data/imagenes';

const navItems = [
  ['Productos', 'productos'],
  ['¿Cómo funciona?', 'como-funciona'],
  ['Preguntas frecuentes', 'preguntas'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `/#${id}`);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.slice(1);
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const openQuote = () => setQuoteOpen(true);
    window.addEventListener('open-esmeralda-quote', openQuote);
    return () => window.removeEventListener('open-esmeralda-quote', openQuote);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', quoteOpen);
    return () => document.body.classList.remove('modal-open');
  }, [quoteOpen]);

  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Navegación principal">
          <Link to="/" className="brand" aria-label="Esmeralda Sweet - inicio" onClick={() => setOpen(false)}>
            <img src={imagenes.logo} alt="Esmeralda Sweet" />
            <span>Esmeralda <strong>sweet</strong></span>
          </Link>

          <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
            {navItems.map(([label, id]) => (
              <a
                href={`/#${id}`}
                key={id}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(id);
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="/#nuestra-historia"
              onClick={(e) => {
                e.preventDefault();
                goToSection('nuestra-historia');
              }}
            >
              Nosotros
            </a>
            <button
              className="nav-quote-mobile"
              type="button"
              onClick={() => {
                setOpen(false);
                setQuoteOpen(true);
              }}
            >
              Cotización rápida
            </button>
          </div>

          <div className="nav-actions">
            <button
              className="nav-quote"
              type="button"
              onClick={() => setQuoteOpen(true)}
            >
              Cotización rápida <span aria-hidden="true">↗</span>
            </button>
            <a
              className="nav-cta"
              href={whatsappUrl(`Hola Esmeralda Sweet 😊

Quisiera hacer una consulta para realizar un pedido.

Me gustaría conocer las opciones disponibles y recibir asesoramiento para elegir la propuesta que mejor se adapte a lo que necesito.

¡Gracias! 💚`)}
              target="_blank"
              rel="noreferrer"
            >
              Hacer pedido <span aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            className="nav-menu-button"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      <CotizacionRapida
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
