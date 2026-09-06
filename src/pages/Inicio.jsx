import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';
import { imagenes } from '../data/imagenes';
import { whatsappUrl } from '../data/config';
import ProductoCard from '../components/ProductoCard';
import Comentarios from '../components/Comentarios';
import CotizacionRapida from '../components/CotizacionRapida';

const heroImage = imagenes.personalizada12;
const galleryImages = imagenes.galeria;
const nosotrosImage = imagenes.rolito;

const beneficios = [
  ['🤲', 'Hecho artesanalmente', 'Cada pedido es único y se prepara especialemente para ti.'],
  ['⌛', 'Pedidos con anticipación', 'Tomamos pedidos con 2-3 días de anticipación.'],
  ['⏱️', 'Pedidos express', '¿Necesitás tu pedido con urgencia?. Contactanos y buscamos la mejor solución.'],
  ['🚚', 'Entrega coordinada', 'Realizamos envíos en Montevideo o podés retirar tu pedido en nuestro pick up en el Centro.'],
];

const pasos = [
  ['01', 'Elegí tu favorito', 'Recorré nuestros productos y encontrá la propuesta que más se adapta a tu momento.'],
  ['02', 'Escribinos', 'Hacé tu pedido directo por WhatsApp y contanos fecha, cantidad y preferencias.'],
  ['03', 'Coordinamos', 'Te confirmamos disponibilidad, horario y todos los detalles antes de preparar tu pedido.'],
  ['04', 'Disfrutá', 'Recibís una propuesta lista para poner en la mesa y compartir.']
];

export default function Inicio() {
  const destacados = productos.slice(0, 4);

  return (
    <main>
      <section className="hero-home">
        <div className="hero-home__image" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-home__overlay" />
        <div className="hero-home__content section-container">
          <p className="hero-home__eyebrow">ESMERALDA SWEET · PASTELERÍA ARTESANAL</p>
          <h1>Algo rico para alegrar el <em>corazón.</em></h1>
          <p>
            Creamos propuestas dulces y saladas para compartir,
            regalar y celebrar. Hechas artesanalmente, con una presentación
            que también forma parte de la experiencia.
          </p>
          <div className="hero-home__actions">
            <a
              className="btn-primary"
              href={whatsappUrl(`Hola Esmeralda Sweet 😊

Quisiera hacer una consulta para realizar un pedido.

Me gustaría conocer las opciones disponibles y recibir asesoramiento para elegir la propuesta que mejor se adapte a lo que necesito.

¡Gracias! 💚`)}
              target="_blank"
              rel="noreferrer"
            >
              Hacer mi pedido
            </a>
            <a className="hero-link" href="#productos">Ver productos ↓</a>
          </div>
        </div>
      </section>

      <section className="info-strip section-container">
        {beneficios.map(([icon, title, text]) => (
          <article className="info-item" key={title}>
            <span className="info-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="productos" className="section products-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Para compartir  · para celebrar · para regalar</p>
            <h2 className="section-title">Nuestros productos</h2>
            <p className="section-subtitle">
              Elegí tu propuesta favorita y pedila directo por WhatsApp.
            </p>
          </div>

          <div className="menu-showcase">
            <Link to="/menu-dulce" className="menu-showcase-card menu-showcase-card--dulce">
              <div className="menu-showcase-card__image" style={{ backgroundImage: `url(${imagenes.productos.lemonPie})` }} />
              <div className="menu-showcase-card__overlay" />
              <div className="menu-showcase-card__top">
                <span className="menu-showcase-card__eyebrow"></span>
                <span className="menu-showcase-card__arrow">↗</span>
              </div>
              <div className="menu-showcase-card__content">
                <h3>Menú dulce</h3>
                <p>Tortas, masitas, alfajores y más...</p>
                <div className="menu-showcase-tags">
                  <span>Tortas</span><span>Masitas</span><span>Alfajores</span><span>Muffins</span><span>Rolls de canela</span>
                </div>
              </div>
              <span className="menu-showcase-card__cta">Explorar menú dulce <span>→</span></span>
            </Link>

            <Link to="/menu-salado" className="menu-showcase-card menu-showcase-card--salado">
              <div className="menu-showcase-card__image" style={{ backgroundImage: `url(${imagenes.productos.sandwiches})` }} />
              <div className="menu-showcase-card__overlay" />
              <div className="menu-showcase-card__top">
                <span className="menu-showcase-card__eyebrow"></span>
                <span className="menu-showcase-card__arrow">↗</span>
              </div>
              <div className="menu-showcase-card__content">
                <h3>Menú salado</h3>
                <p>Saladitos y picadas.</p>
                <div className="menu-showcase-tags">
                  <span>Saladitos</span><span>Picadas</span>
                </div>
              </div>
              <span className="menu-showcase-card__cta">Explorar menú salado <span>→</span></span>
            </Link>

            <Link to="/desayunos" className="menu-showcase-card menu-showcase-card--desayunos">
              <div className="menu-showcase-card__image" style={{ backgroundImage: `url(${imagenes.productos.desayunoCompartido})` }} />
              <div className="menu-showcase-card__overlay" />
              <div className="menu-showcase-card__top">
                <span className="menu-showcase-card__eyebrow"></span>
                <span className="menu-showcase-card__arrow">↗</span>
              </div>
              <div className="menu-showcase-card__content">
                <h3>Desayunos</h3>
                <p>Opciones individuales y para compartir.</p>
                <div className="menu-showcase-tags">
                  <span>Individuales</span><span>Para compartir</span>
                </div>
              </div>
              <span className="menu-showcase-card__cta">Explorar desayunos <span>→</span></span>
            </Link>
          </div>

          <div className="featured-divider">
            <span>Algunas de nuestras propuestas</span>
            <i />
          </div>

          <div className="product-grid">
            {destacados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>

          <div className="center-action">
            <Link to="/menu-dulce" className="btn-secondary">Ver todo el menú</Link>
            <a href="#cotizar" className="text-link center-action__link">Necesito algo personalizado →</a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section process-section section--soft">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Simple, cercano y sin vueltas</p>
            <h2 className="section-title">Del pedido a la mesa</h2>
            <p className="section-subtitle">Así funciona nuestra forma de trabajar.</p>
          </div>
          <div className="steps-grid">
            {pasos.map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Comentarios />

      <section id="nuestra-historia" className="story-section section">
        <div className="section-container story-grid">
          <div className="story-image">
            <img
              src={imagenes.nosotros.historiaRolito}
              alt="Trabajo artesanal de Esmeralda Sweet"
              loading="lazy"
            />
          </div>
          <div className="story-copy">
            <p className="section-kicker">Nuestra historia</p>
            <h2 className="section-title">La suma de un camino</h2>
            <p>
              Esmeralda Sweet nace del gusto por crear cosas lindas, ricas y
              memorables. Creemos que una mesa no es solamente comida: es el
              lugar donde una conversación empieza, una celebración toma forma
              y un momento se convierte en recuerdo.
            </p>
            <p>
              Por eso cuidamos la selección de ingredientes, la elaboración y
              también la presentación final. Queremos que abrir una caja o
              encontrarse con una mesa Esmeralda sea parte de la experiencia.
            </p>
            
          </div>
        </div>
      </section>

      <CotizacionRapida />

      <section id="preguntas" className="faq-section section section--soft">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Antes de pedir</p>
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            <details><summary>¿Con cuánta antelación debo realizar mi pedido?</summary><p>Los pedidos deben realizarse con 2-3 días de anticipación. ¿Lo necesitás antes? Contactanos y trataremos de buscar una solución</p></details>
            <details><summary>¿Dónde se retiran?</summary><p>Para retiros con coordinación previa, nos encontramos ubicados en el Centro.</p></details>
            <details><summary>¿Cúando tomamos pedidos?</summary><p>Tomamos pedidos de lunes a sábado.</p></details>
            <details><summary>¿Realizan envíos?</summary><p>Con coordinación previa en Montevideo por cadetería en un rango mínimo de 2 horas. Consultanos por el barrio y te pasamos la info.</p></details>
          </div>
        </div>
      </section>

      <section className="event-cta">
        <div className="section-container event-cta__inner">
          <p className="section-kicker">¿Tenés un evento o taller?</p>
          <h2>Hagamos algo especial para tu mesa.</h2>
          <p>Contanos qué estás organizando y armamos una propuesta a medida.</p>
          <a
            className="btn-primary"
            href={whatsappUrl(`Hola Esmeralda Sweet 😊

Estoy organizando un evento y me gustaría consultar por una propuesta.

Quisiera contarles algunos detalles para que puedan orientarme con las opciones disponibles y, si es posible, preparar una propuesta acorde a lo que estoy buscando.

¡Gracias! 💚`)}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por mi evento
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-container site-footer__grid">
          <div>
            <strong>ESMERALDA SWEET</strong>
            <p>Propuestas artesanales para momentos especiales.</p>
          </div>
          <div>
            <strong>Explorá</strong>
            <Link to="/menu-dulce">Menú dulce</Link>
            <Link to="/menu-salado">Menú salado</Link>
            <Link to="/desayunos">Desayunos</Link>
            <Link to="/#nuestra-historia">Nosotros</Link>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/esmeralda_sweet_uy?igsh=MWE5YjcxNmVsc3k0eQ==&igsi=MWE5YjcxNmVsc3k0eQ==" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@esmeralda_sweet_uy?_r=1&_t=ZS-98sRSKNJTeO" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
        <div className="site-footer__bottom">© {new Date().getFullYear()} Esmeralda Sweet. Todos los derechos reservados.</div>
      </footer>
    </main>
  );
}
