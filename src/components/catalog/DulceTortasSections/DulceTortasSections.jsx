import { useState } from 'react';
import ProductoCard from '../../ProductoCard/ProductoCard';
import './DulceTortasSections.css';

const SECCIONES = [
  {
    id: 'tortas-y-postres',
    titulo: 'Tortas y postres',
    
  },
  {
    id: 'tortas-personalizadas',
    titulo: 'Tortas personalizadas',
    
  },
  {
    id: 'sin-azucar',
    titulo: 'Sin azúcar',
    
  },
];

const INITIAL_OPEN_SECTIONS = {
  'tortas-y-postres': false,
  'tortas-personalizadas': false,
  'sin-azucar': false,
};

export default function DulceTortasSections({ productos }) {
  const [openSections, setOpenSections] = useState(INITIAL_OPEN_SECTIONS);

  const toggleSection = (id) => {
    setOpenSections((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <div className="dulce-sections">
      {SECCIONES.map((seccion) => {
        const productosSeccion = productos.filter(
          (producto) => producto.subsubcategoria === seccion.id,
        );
        const isOpen = openSections[seccion.id];
        const contentId = `dulce-content-${seccion.id}`;

        return (
          <section
            className={`dulce-section ${isOpen ? 'is-open' : ''}`}
            key={seccion.id}
          >
            <button
              type="button"
              className="dulce-section__heading"
              onClick={() => toggleSection(seccion.id)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="dulce-section__heading-text">
                <span className="section-kicker">Esmeralda Sweet</span>
                <span className="dulce-section__title">{seccion.titulo}</span>
                <span className="dulce-section__description">{seccion.descripcion}</span>
              </span>
              <span className="dulce-section__arrow" aria-hidden="true">↓</span>
            </button>

            <div
              id={contentId}
              className="dulce-section__content"
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              {productosSeccion.length > 0 ? (
                <div className="dulce-section__grid">
                  {productosSeccion.map((producto) => (
                    <ProductoCard
                      key={producto.id}
                      producto={producto}
                      categoria="Menú dulce"
                    />
                  ))}
                </div>
              ) : (
                <div className="catalog-note">
                  <strong>Próximamente nuevas propuestas.</strong>
                  <br />
                  Estamos preparando nuevas opciones para esta categoría.
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
