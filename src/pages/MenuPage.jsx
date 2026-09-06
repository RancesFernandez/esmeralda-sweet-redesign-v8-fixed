import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { getCategoria, getOpcion } from '../data/menuCategorias';
import { imagenes } from '../data/imagenes';

//Para desayunos sacar la parte superior y dejar solo las cards con los productos
// En tortas personalizadas hacer algo similar a lo de los saladitos

const dulceTortaSecciones = [

  {
    id: 'tortas-y-postres',
    titulo: 'Tortas y postres',
    descripcion: 'Tortas y postres artesanales para disfrutar y compartir.',
  },
  {
    id: 'tortas-personalizadas',
    titulo: 'Tortas personalizadas',
    descripcion: 'Diseños y sabores a medida para celebraciones especiales.',
  },
  {
    id: 'sin-azucar',
    titulo: 'Sin azúcar',
    descripcion: 'Opciones pensadas para quienes buscan alternativas sin azúcar.',
  },
];

function DulceTortasSections({ productos }) {
  const [openSections, setOpenSections] = useState({
    'tortas-y-postres': true,
    'tortas-personalizadas': false,
    'sin-azucar': false,
  });

  const secciones = [
    {
      id: 'tortas-y-postres',
      titulo: 'Tortas y postres',
      descripcion: 'Tortas y postres artesanales para disfrutar y compartir.',
    },
    {
      id: 'tortas-personalizadas',
      titulo: 'Tortas personalizadas',
      descripcion:
        'Diseños y sabores pensados especialmente para cada celebración.',
    },
    {
      id: 'sin-azucar',
      titulo: 'Sin azúcar',
      descripcion:
        'Opciones deliciosas para quienes buscan alternativas sin azúcar.',
    },
  ];

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="dulce-sections">
      {secciones.map((seccion) => {
        const productosSeccion = productos.filter(
          (producto) =>
            producto.subsubcategoria === seccion.id
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
                <span className="section-kicker">
                  Esmeralda Sweet
                </span>

                <span className="dulce-section__title">
                  {seccion.titulo}
                </span>

                <span className="dulce-section__description">
                  {seccion.descripcion}
                </span>
              </span>

              <span
                className="dulce-section__arrow"
                aria-hidden="true"
              >
                ↓
              </span>
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
                  <strong>
                    Próximamente nuevas propuestas.
                  </strong>
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

export default function MenuPage({ categoria, titulo, subtitulo }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaData = getCategoria(categoria);
  const resultsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [categoria]);

  const opcionId = searchParams.get('tipo') || categoriaData?.opciones[0]?.id;
  const opcion = getOpcion(categoria, opcionId);
  const isDulceTortas = categoria === 'dulce' && opcionId === 'tortas';

  const filteredProducts = useMemo(() => {
    return productos.filter((item) => {
      if (item.categoria !== categoria) return false;
      if (!item.subcategoria) return true;
      return item.subcategoria === opcionId;
    });
  }, [categoria, opcionId]);

  const setTipo = (id) => {
    setSearchParams({ tipo: id });

    window.setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };





  return (
    <main className="catalog-page">
      <section className={`catalog-hero catalog-hero--${categoria}`}>
        <div className="catalog-hero__decor catalog-hero__decor--one" />
        <div className="catalog-hero__decor catalog-hero__decor--two" />
        <div className="section-container">
          <p className="section-kicker">Esmeralda Sweet · catálogo</p>
          <h1>{titulo}</h1>
          <p>{subtitulo}</p>
        </div>
      </section>

      <section className="section catalog-navigation">
        <div className="section-container">
          <div className="catalog-intro">
            <div>
              <p className="section-kicker">Elegí una categoría</p>
              <h2 className="section-title">Encontrá exactamente lo que buscás.</h2>
            </div>
            <p className="catalog-intro__text">

            </p>
          </div>

          <div className="menu-option-grid">
            {categoriaData?.opciones.map((item) => (
              <button
                key={item.id}
                className={`menu-option-card ${opcionId === item.id ? 'is-active' : ''}`}
                onClick={() => setTipo(item.id)}
                type="button"
                aria-pressed={opcionId === item.id}
              >
                <span className="menu-option-card__image" aria-hidden="true">
                  <img
                    src={imagenes.productos[item.imagenKey]}
                    alt=""
                  />
                </span>
                <span className="menu-option-card__overlay" aria-hidden="true" />
                <span className="menu-option-card__content">
                  <strong>{item.nombre}</strong>
                  <span>{item.descripcion}</span>
                  <small>{opcionId === item.id ? 'Seleccionado' : 'Explorar →'}</small>
                </span>
              </button>
            ))}
          </div>

          {isDulceTortas ? (
            <div
              ref={resultsRef}
              id="menu-resultados"
            >
              <DulceTortasSections
                productos={filteredProducts}
              />
            </div>
          ) : (
            <div
              ref={resultsRef}
              id="menu-resultados"
              className="catalog-results"
            >
              <div className="catalog-results__heading">
                <div>
                  <p className="section-kicker">{categoriaData?.nombre} · {opcion?.nombre}</p>
                  <h2>{opcion?.nombre}</h2>
                </div>
                <span>
                  {filteredProducts.length > 0
                    ? `${filteredProducts.length} ${filteredProducts.length === 1 ? 'propuesta' : 'propuestas'}`
                    : '1 espacio preparado'}
                </span>
              </div>

              <div className="catalog-grid">
                {filteredProducts.map((producto) => (
                  <ProductoCard key={producto.id} producto={producto} categoria={categoriaData?.nombre} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="catalog-note">
                  <strong>Esta categoría ya está lista para crecer.</strong>{' '}
                  Podés sumar nuevas variedades directamente como cards manteniendo esta misma estructura visual.
                </div>
              )}
            </div>
          )}

          <div className="catalog-bottom-links">
            <Link
              to={categoria === 'dulce' ? '/menu-salado' : categoria === 'salado' ? '/desayunos' : '/menu-dulce'}
              className="text-link"
            >
              Explorar {categoria === 'dulce' ? 'menú salado' : categoria === 'salado' ? 'desayunos' : 'menú dulce'} →
            </Link>
            <Link to="/" className="text-link">Volver al inicio →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
