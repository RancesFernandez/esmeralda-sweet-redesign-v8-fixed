import { useEffect, useState } from 'react';
import { whatsappUrl, MSG_PEDIDO_GENERAL } from '../../../data/config';
import { imagenes } from '../../../data/imagenes';
import './HeroHome.css';

const HERO_IMAGES = [
  { src: imagenes.productos.tortaMerengue, alt: 'Torta merengue artesanal' },
  { src: imagenes.productos.tortaMatilda, alt: 'Torta Matilda artesanal' },
  { src: imagenes.productos.personalizada14, alt: 'Torta personalizada Esmeralda Sweet' },
  { src: imagenes.productos.sandwiches, alt: 'Saladitos artesanales' },
  { src: imagenes.productos.desayunoCompartido, alt: 'Desayuno compartido' },
  { src: imagenes.productos.alfajoresPrincipal, alt: 'Alfajores artesanales' },
];

const SLIDE_DURATION = 15000;

export default function HeroHome() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-home" aria-label="Presentación de Esmeralda Sweet">
      <div className="hero-home__slides" aria-hidden="true">
        {HERO_IMAGES.map((image, index) => (
          <img
            key={image.src}
            className={`hero-home__image ${index === activeSlide ? 'is-active' : ''}`}
            src={image.src}
            alt=""
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="hero-home__overlay" aria-hidden="true" />
      <div className="hero-home__glow" aria-hidden="true" />

      <div className="hero-home__content section-container">
        <p className="hero-home__eyebrow">ESMERALDA SWEET · PASTELERÍA ARTESANAL</p>
        <h1>Pastelería artesanal para alegrar el <em>corazón.</em></h1>
        <p>
          Creamos tortas, postres, alfajores, desayunos y propuestas dulces y saladas
          para compartir, regalar y celebrar. Hechas artesanalmente en Montevideo,
          con una presentación que también forma parte de la experiencia.
        </p>
        <div className="hero-home__actions">
          <a
            className="btn-primary"
            href={whatsappUrl(MSG_PEDIDO_GENERAL)}
            target="_blank"
            rel="noreferrer"
          >
            Hacer mi pedido
          </a>
          <a className="hero-link" href="#productos">Ver productos ↓</a>
        </div>
      </div>
    </section>
  );
}
