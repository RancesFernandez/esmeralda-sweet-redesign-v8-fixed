import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { getCategoria, getOpcion } from '../data/menuCategorias';
import { imagenes } from '../data/imagenes';

const dulceTortaSecciones = [
  {
    id: 'sin-azucar',
    titulo: 'Sin azúcar',
    descripcion: 'Opciones pensadas para quienes buscan alternativas sin azúcar.',
  },
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
];

function DulceTortasSections() {
  return (
    <div className="dulce-sections" aria-label="Secciones de postres y tortas">
      {dulceTortaSecciones.map((seccion) => (
        <section className="dulce-section" key={seccion.id}>
          <div className="dulce-section__heading">
            <div>
              <p className="section-kicker">Esmeralda Sweet · {seccion.id.replaceAll('-', ' ')}</p>
              <h2>{seccion.titulo}</h2>
            </div>
            <p>{seccion.descripcion}</p>
          </div>

          <div className="dulce-section__grid" aria-label={`Ejemplos de ${seccion.titulo}`}>
            {[1, 2, 3].map((numero) => (
              <ProductoCard
                key={`${seccion.id}-${numero}`}
                producto={{
                  id: `placeholder-${seccion.id}-${numero}`,
                  categoria: 'dulce',
                  subcategoria: 'tortas',
                  subsubcategoria: seccion.id,
                  nombre: `Ejemplo de propuesta ${numero}`,
                  descripcion: 'Card modelo lista para reemplazar por el nombre, foto, precio y descripción de una nueva propuesta.',
                  imagen: imagenes.productos.tortaEsmeraldaPremium,
                  esPlaceholder: true,
                }}
                categoria={seccion.titulo}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function MenuPage({ categoria, titulo, subtitulo }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaData = getCategoria(categoria);

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

  const setTipo = (id) => setSearchParams({ tipo: id });

  const fallbackProduct = filteredProducts.length === 0 && opcion
    ? [{
        id: `starter-${categoria}-${opcionId}`,
        categoria,
        subcategoria: opcionId,
        nombre: 'Ejemplo de propuesta',
        descripcion: 'Este espacio queda preparado para agregar nuevas propuestas, variedades y productos de esta categoría.',
        imagen: imagenes.productos[opcion.imagenKey],
        esPlaceholder: true,
      }]
    : [];

  const visibleProducts = filteredProducts.length > 0 ? filteredProducts : fallbackProduct;

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
              Explorá por tipo. Cada sección está preparada para sumar nuevas propuestas sin cambiar el diseño.
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
                <span
                  className="menu-option-card__image"
                  style={{ backgroundImage: `url(${imagenes.productos[item.imagenKey]})` }}
                  aria-hidden="true"
                />
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
            <DulceTortasSections />
          ) : (
            <div className="catalog-results">
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
                {visibleProducts.map((producto) => (
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
