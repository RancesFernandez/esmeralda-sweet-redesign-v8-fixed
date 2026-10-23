import { useEffect, useState } from "react";
import { whatsappUrl, MSG_PEDIDO_GENERAL } from "../../../data/config";
import { imagenes } from "../../../data/imagenes";
import "./HeroHome.css";

const HERO_IMAGES = [
  { src: imagenes.productos.tortaMerengue, alt: "Torta merengue artesanal" },
  { src: imagenes.productos.tortaMatilda, alt: "Torta Matilda artesanal" },
  {
    src: imagenes.productos.personalizada14,
    alt: "Torta personalizada Esmeralda Sweet",
  },
  { src: imagenes.productos.sandwiches, alt: "Saladitos artesanales" },
  { src: imagenes.productos.desayunoCompartido, alt: "Desayuno compartido" },
  { src: imagenes.productos.alfajoresPrincipal, alt: "Alfajores artesanales" },
];

const SLIDE_DURATION = 15000;

export default function HeroHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [enteringSlide, setEnteringSlide] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      const nextSlide = (activeSlide + 1) % HERO_IMAGES.length;
      const nextImage = new window.Image();

      const showNextSlide = () => {
        if (cancelled) return;
        setPreviousSlide(activeSlide);
        setActiveSlide(nextSlide);
        setEnteringSlide(nextSlide);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            if (!cancelled) setEnteringSlide(null);
          });
        });
      };

      nextImage.onload = showNextSlide;
      nextImage.onerror = showNextSlide;
      nextImage.src = HERO_IMAGES[nextSlide].src;
    }, SLIDE_DURATION);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [activeSlide]);

  useEffect(() => {
    if (previousSlide === null) return undefined;
    const timer = window.setTimeout(() => setPreviousSlide(null), 1200);
    return () => window.clearTimeout(timer);
  }, [previousSlide, activeSlide]);

  return (
    <section className="hero-home" aria-label="Presentación de Esmeralda Sweet">
      <div className="hero-home__slides" aria-hidden="true">
        {previousSlide !== null && (
          <img
            key={HERO_IMAGES[previousSlide].src}
            className="hero-home__image is-leaving"
            src={HERO_IMAGES[previousSlide].src}
            alt=""
            decoding="async"
          />
        )}
        <img
          key={HERO_IMAGES[activeSlide].src}
          className={`hero-home__image ${enteringSlide === activeSlide ? "is-entering" : "is-active"}`}
          src={HERO_IMAGES[activeSlide].src}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="hero-home__overlay" aria-hidden="true" />
      <div className="hero-home__glow" aria-hidden="true" />

      <div className="hero-home__content section-container">
        <p className="hero-home__eyebrow">
          ESMERALDA SWEET · PASTELERÍA ARTESANAL
        </p>
        <h1>
          Algo rico para alegrar el <em>corazón.</em>
        </h1>

        <div className="hero-home__actions">
          <a
            className="btn-primary"
            href={whatsappUrl(MSG_PEDIDO_GENERAL)}
            target="_blank"
            rel="noreferrer"
          >
            Hacer mi pedido
          </a>
          <a className="hero-link" href="#productos">
            Ver productos ↓
          </a>
        </div>
      </div>
    </section>
  );
}
