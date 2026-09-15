import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { whatsappUrl, MSG_PEDIDO_GENERAL } from '../../data/config';
import CotizacionRapida from '../CotizacionRapida/CotizacionRapida';
import { imagenes } from '../../data/imagenes';
import './Navbar.css';

const menuItems = [
  { label: 'Menú dulce', to: '/menu-dulce' },
  { label: 'Menú salado', to: '/menu-salado' },
  { label: 'Desayunos', to: '/desayunos' },
];

const navItems = [
  ['¿Cómo funciona?', 'como-funciona'],
  ['Preguntas frecuentes', 'preguntas'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const isMenuSectionActive = menuItems.some(({ to }) => location.pathname === to);

  const closeMenus = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  const goToSection = (id) => {
    closeMenus();
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
    closeMenus();
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
          <Link to="/" className="brand" aria-label="Esmeralda Sweet - inicio" onClick={closeMenus}>
            <img src={imagenes.logo} alt="Esmeralda Sweet" />
            <span>Esmeralda <strong>sweet</strong></span>
          </Link>

          <div id="site-navigation-links" className={`nav-links ${open ? 'nav-links--open' : ''}`}>
            <div className={`nav-dropdown ${menuOpen ? 'nav-dropdown--open' : ''}`} ref={menuRef}>
              <button
                className={`nav-dropdown__trigger ${isMenuSectionActive ? 'is-active' : ''}`}
                type="button"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                aria-controls="site-menu-panel"
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span>Menú</span>
              </button>

              <div id="site-menu-panel" className="nav-dropdown__panel">
                {menuItems.map(({ label, to }) => (
                  <Link key={to} to={to} onClick={closeMenus}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

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
                closeMenus();
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
              href={whatsappUrl(MSG_PEDIDO_GENERAL)}
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
            aria-controls="site-navigation-links"
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
