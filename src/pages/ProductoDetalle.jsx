import { Link, useParams } from 'react-router-dom';
import SEO, { buildProductSchema } from '../components/SEO/SEO';
import { getProductoBySlug, getProductSeoDescription, getProductPath } from '../lib/seoProductos';
import { whatsappUrl } from '../data/config';
import './ProductoDetalle.css';

const money = (value) => Number(value).toLocaleString('es-UY');

export default function ProductoDetalle() {
  const { slug } = useParams();
  const producto = getProductoBySlug(slug);

  if (!producto) {
    return (
      <main className="product-detail product-detail--not-found" id="main-content">
        <p className="section-kicker">Esmeralda Sweet</p>
        <h1>No encontramos ese producto</h1>
        <p>Puede que haya cambiado de nombre o que ya no esté disponible en el catálogo.</p>
        <Link className="product-detail__back" to="/menu-dulce">Explorar el catálogo</Link>
      </main>
    );
  }

  const description = getProductSeoDescription(producto);
  const title = `${producto.nombre} en Montevideo | Esmeralda Sweet`;
  const categoryPath = producto.categoria === 'dulce'
    ? '/menu-dulce'
    : producto.categoria === 'salado' ? '/menu-salado' : '/desayunos';
  const categoryLabel = producto.categoria === 'dulce'
    ? 'Menú dulce'
    : producto.categoria === 'salado' ? 'Menú salado' : 'Desayunos';
  const image = producto.imagen;
  const message = `Hola Esmeralda Sweet 😊\n\nQuisiera consultar por ${producto.nombre}. ¿Me pueden informar disponibilidad y detalles para realizar un pedido?\n\n¡Gracias!`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={getProductPath(producto)}
        image={image}
        jsonLd={buildProductSchema({ producto, description, image, path: getProductPath(producto) })}
      />
      <main className="product-detail" id="main-content" tabIndex={-1}>
        <nav className="product-detail__breadcrumbs" aria-label="Ruta de navegación">
          <Link to="/">Inicio</Link><span aria-hidden="true">/</span>
          <Link to={categoryPath}>{categoryLabel}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{producto.nombre}</span>
        </nav>

        <article className="product-detail__layout">
          <div className="product-detail__media">
            <img src={image} alt={`${producto.nombre} artesanal de Esmeralda Sweet`} fetchPriority="high" />
          </div>
          <div className="product-detail__content">
            <p className="section-kicker">{categoryLabel} · Elaboración artesanal</p>
            <h1>{producto.nombre}</h1>
            <p className="product-detail__description">{producto.descripcion}</p>

            {producto.detalle?.secciones?.map((section) => (
              <section className="product-detail__section" key={section.titulo}>
                <h2>{section.titulo}</h2>
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}

            {producto.detalle?.precios?.length > 0 && (
              <section className="product-detail__section">
                <h2>Presentaciones y precios</h2>
                <ul className="product-detail__prices">
                  {producto.detalle.precios.map((price) => <li key={price}>{price}</li>)}
                </ul>
              </section>
            )}
            {(producto.precio16 != null || producto.precio22 != null) && (
              <section className="product-detail__section">
                <h2>Tamaños disponibles</h2>
                <div className="product-detail__sizes">
                  {producto.precio16 != null && <div><strong>16 cm</strong><span>${money(producto.precio16)}</span><small>{producto.porciones16}</small></div>}
                  {producto.precio22 != null && <div><strong>22 cm</strong><span>${money(producto.precio22)}</span><small>{producto.porciones22}</small></div>}
                </div>
              </section>
            )}
            {producto.detalle?.nota && <p className="product-detail__note">{producto.detalle.nota}</p>}
            <p className="product-detail__local">Pedidos y consultas en Montevideo, Uruguay. Consultá disponibilidad, anticipación y opciones de entrega.</p>
            <a className="product-detail__cta" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <Link className="product-detail__back" to={categoryPath}>Ver más {categoryLabel.toLowerCase()}</Link>
          </div>
        </article>
      </main>
    </>
  );
}
