import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { getCategoria, getOpcion } from '../data/menuCategorias';
import { imagenes } from '../data/imagenes';
import { buscarProductos } from '../lib/busquedaProductos';


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
  const searchQuery = searchParams.get('buscar') || '';
  const hasGlobalSearch = searchQuery.trim().length > 0;
  const isDulceTortas = categoria === 'dulce' && opcionId === 'tortas';

  const filteredProducts = useMemo(() => {
    return productos.filter((item) => {
      if (item.categoria !== categoria) return false;

      if (categoria === 'desayunos') {
        return true;
      }

      if (!item.subcategoria) return true;

      return item.subcategoria === opcionId;
    });
  }, [categoria, opcionId]);

  const searchResults = useMemo(
    () => buscarProductos(productos, searchQuery),
    [searchQuery]
  );

  const updateSearch = (value) => {
    const nextParams = new URLSearchParams(searchParams);
    const trimmedValue = value.trimStart();

    if (trimmedValue) {
      nextParams.set('buscar', trimmedValue);
    } else {
      nextParams.delete('buscar');
    }

    setSearchParams(nextParams, { replace: true });
  };

  const clearSearch = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('buscar');
    setSearchParams(nextParams, { replace: true });
  };

  const setTipo = (id) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('tipo', id);
    nextParams.delete('buscar');
    setSearchParams(nextParams);

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

          <div className={`catalog-search ${hasGlobalSearch ? 'catalog-search--active' : ''}`}>
            <div className="catalog-search__copy">
              <p className="section-kicker">Buscar en todo el catálogo</p>
              <p className="catalog-search__hint">
                Encontrá cualquier producto, sin importar en qué menú esté.
              </p>
            </div>

            <div className="catalog-search__field">
              <span className="catalog-search__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4.2 4.2" />
                </svg>
              </span>

              <label className="sr-only" htmlFor={`catalog-search-${categoria}`}>
                Buscar productos en todo el catálogo
              </label>

              <input
                id={`catalog-search-${categoria}`}
                type="search"
                value={searchQuery}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder="Buscar por nombre…"
                autoComplete="off"
                spellCheck="false"
                enterKeyHint="search"
              />

              {hasGlobalSearch && (
                <button
                  type="button"
                  className="catalog-search__clear"
                  onClick={clearSearch}
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {hasGlobalSearch ? (
            <div ref={resultsRef} id="menu-resultados" className="catalog-search-results">
              <div className="catalog-results__heading">
                <div>
                  <p className="section-kicker">Resultados en todo el catálogo</p>
                  <h2>
                    {searchResults.length > 0
                      ? `Resultados para “${searchQuery.trim()}”`
                      : 'No encontramos coincidencias'}
                  </h2>
                </div>

                <span>
                  {searchResults.length > 0
                    ? `${searchResults.length} ${searchResults.length === 1 ? 'propuesta' : 'propuestas'}`
                    : 'Probá con otro nombre'}
                </span>
              </div>

              {searchResults.length > 0 ? (
                <div className="catalog-grid catalog-grid--search">
                  {searchResults.map((producto) => (
                    <ProductoCard
                      key={producto.id}
                      producto={producto}
                      categoria={
                        producto.categoria === 'dulce'
                          ? 'Menú dulce'
                          : producto.categoria === 'salado'
                            ? 'Menú salado'
                            : 'Desayunos'
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="catalog-search-empty">
                  <span aria-hidden="true">⌕</span>
                  <strong>No hay productos que coincidan con tu búsqueda.</strong>
                  <p>Probá con una parte del nombre, por ejemplo “torta”, “choc” o “desay”.</p>
                </div>
              )}
            </div>
          ) : (
            <>
          {categoria !== 'desayunos' && (
            <>
              <div className="catalog-intro">
                <div>
                  <p className="section-kicker">Elegí una categoría</p>

                  <h2 className="section-title">
                    Encontrá exactamente lo que buscás.
                  </h2>
                </div>
              </div>

              <div className="menu-option-grid">
                {categoriaData?.opciones.map((item) => (
                  <button
                    key={item.id}
                    className={`menu-option-card ${opcionId === item.id ? 'is-active' : ''
                      }`}
                    onClick={() => setTipo(item.id)}
                    type="button"
                    aria-pressed={opcionId === item.id}
                  >
                    <span
                      className="menu-option-card__image"
                      aria-hidden="true"
                    >
                      <img
                        src={imagenes.productos[item.imagenKey]}
                        alt=""
                      />
                    </span>

                    <span
                      className="menu-option-card__overlay"
                      aria-hidden="true"
                    />

                    <span className="menu-option-card__content">
                      <strong>{item.nombre}</strong>

                      <span>{item.descripcion}</span>

                      <small>
                        {opcionId === item.id
                          ? 'Seleccionado'
                          : 'Explorar →'}
                      </small>
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

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
                  <p className="section-kicker">
                    {categoriaData?.nombre} · {opcion?.nombre}
                  </p>

                  <h2>{opcion?.nombre}</h2>
                </div>

                <span>
                  {filteredProducts.length > 0
                    ? `${filteredProducts.length} ${filteredProducts.length === 1
                      ? 'propuesta'
                      : 'propuestas'
                    }`
                    : '1 espacio preparado'}
                </span>
              </div>

              <div className="catalog-grid">
                {filteredProducts.map((producto) => (
                  <ProductoCard
                    key={producto.id}
                    producto={producto}
                    categoria={categoriaData?.nombre}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="catalog-note">
                  <strong>
                    Esta categoría ya está lista para crecer.
                  </strong>{' '}
                  Podés sumar nuevas variedades directamente como
                  cards manteniendo esta misma estructura visual.
                </div>
              )}
            </div>
          )}

            </>
          )}

          <div className="catalog-bottom-links">
            <Link
              to={
                categoria === 'dulce'
                  ? '/menu-salado'
                  : categoria === 'salado'
                    ? '/desayunos'
                    : '/menu-dulce'
              }
              className="text-link"
            >
              Explorar{' '}
              {categoria === 'dulce'
                ? 'menú salado'
                : categoria === 'salado'
                  ? 'desayunos'
                  : 'menú dulce'}{' '}
              →
            </Link>

            <Link
              to="/"
              className="text-link"
            >
              Volver al inicio →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
