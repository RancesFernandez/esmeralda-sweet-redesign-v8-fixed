import React, { useEffect, useState } from 'react';
import { whatsappUrl } from '../data/config';

export default function ProductoCard({ producto, categoria }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageTransition, setImageTransition] = useState(false);

  const esTorta = producto.subsubcategoria === 'tortas-y-postres';
  const listaImagenes =
    producto.imagenes?.length > 0
      ? producto.imagenes
      : [producto.imagen];

  const imagenActual = listaImagenes[currentImage];

  const cambiarImagen = (nuevoIndice) => {
    if (nuevoIndice === currentImage) return;

    setImageTransition(false);

    requestAnimationFrame(() => {
      setCurrentImage(nuevoIndice);

      requestAnimationFrame(() => {
        setImageTransition(true);
      });
    });
  };

  const siguienteImagen = (event) => {
    event.stopPropagation();

    cambiarImagen(
      (currentImage + 1) % listaImagenes.length
    );
  };

  const anteriorImagen = (event) => {
    event.stopPropagation();

    cambiarImagen(
      (currentImage - 1 + listaImagenes.length) % listaImagenes.length
    );
  };

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle('product-modal-open', open);

    if (!open) {
      setCurrentImage(0);
      setImageTransition(false);
    } else {
      setImageTransition(true);
    }

    return () => {
      document.body.classList.remove('product-modal-open');
    };
  }, [open]);

  const categoryLabel =
    producto.categoria === 'dulce'
      ? 'Propuesta dulce'
      : producto.categoria === 'salado'
        ? 'Propuesta salada'
        : 'Propuesta de desayuno';

  return (
    <>
      <article
        className={`product-card ${esTorta ? 'product-card--torta' : ''}`}
        tabIndex="0"
        role="button"
        aria-label={`Ver detalle de ${producto.nombre}`}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >

        {/* IMAGEN */}
        <div className="product-card__image">

          {listaImagenes.length > 1 && (
            <>
              <button
                type="button"
                className="product-image-nav product-image-nav--prev"
                onClick={anteriorImagen}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="product-image-nav product-image-nav--next"
                onClick={siguienteImagen}
                aria-label="Siguiente imagen"
              >
                ›
              </button>

              <div className="product-image-dots">
                {listaImagenes.map((_, index) => (
                  <span
                    key={index}
                    className={index === currentImage ? 'is-active' : ''}
                  />
                ))}
              </div>
            </>
          )}

          <img
            key={imagenActual}
            src={imagenActual}
            alt={producto.nombre}
            loading="lazy"
            decoding="async"
            className={imageTransition ? 'is-image-transitioning' : ''}
          />

          <span className="product-card__badge">
            {esTorta ? 'Tortas y postres' : categoryLabel}
          </span>

          <span className="product-card__quick">
            Ver detalle <span aria-hidden="true">↗</span>
          </span>

        </div>


        {/* CONTENIDO */}
        <div className="product-card__body">

          <div className="product-card__top">
            <h3>{producto.nombre}</h3>
          </div>


          <p className="product-card__description">
            {producto.descripcion}
          </p>


          {esTorta && producto.precio16 != null && (
            <div className="product-card__sizes">

              <div className="product-card__size">
                <span>16 cm</span>

                <strong>
                  ${producto.precio16.toLocaleString('es-UY')}
                </strong>

                <small>
                  {producto.porciones16}
                </small>
              </div>


              <div className="product-card__size">
                <span>22 cm</span>

                <strong>
                  ${producto.precio22.toLocaleString('es-UY')}
                </strong>

                <small>
                  {producto.porciones22}
                </small>
              </div>

            </div>
          )}


          {!esTorta && producto.precio && (
            <strong className="product-card__single-price">
              ${producto.precio.toLocaleString('es-UY')}
            </strong>
          )}


          <span className="product-card__link">
            Consultar por WhatsApp
            <span aria-hidden="true">→</span>
          </span>

        </div>

      </article>


      {/* ====================================================
          MODAL
          ==================================================== */}

      {open && (
        <div
          className="modal-backdrop product-modal-backdrop"
          onClick={() => setOpen(false)}
        >

          <div
            className="modal-product"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`producto-${producto.id}`}
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar detalle"
            >
              ×
            </button>


            <div className="modal-product__image">
              <img
                key={imagenActual}
                src={imagenActual}
                alt={producto.nombre}
                className={imageTransition ? 'is-image-transitioning' : ''}
              />

              {listaImagenes.length > 1 && (
                <>
                  <button
                    type="button"
                    className="modal-image-nav modal-image-nav--prev"
                    onClick={anteriorImagen}
                    aria-label="Imagen anterior"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="modal-image-nav modal-image-nav--next"
                    onClick={siguienteImagen}
                    aria-label="Siguiente imagen"
                  >
                    ›
                  </button>

                  <div className="modal-image-dots">
                    {listaImagenes.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={index === currentImage ? 'is-active' : ''}
                        onClick={(event) => {
                          event.stopPropagation();
                          cambiarImagen(index);
                        }}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>


            <div className="modal-product__content">

              <p className="section-kicker">
                {categoria ||
                  (producto.categoria === 'dulce'
                    ? 'Menú dulce'
                    : producto.categoria === 'salado'
                      ? 'Menú salado'
                      : 'Desayunos')}
              </p>


              <h2 id={`producto-${producto.id}`}>
                {producto.nombre}
              </h2>


              <p className="modal-product__description">
                {producto.descripcion}
              </p>

              {producto.detalle && (
                <div className="modal-product__details">

                  {producto.detalle.precios && (
                    <div className="modal-product__detail-section">
                      <h3>Opciones</h3>

                      <ul>
                        {producto.detalle.precios.map((precio, index) => (
                          <li key={index}>{precio}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {producto.detalle.secciones?.map((seccion, index) => (
                    <div
                      className="modal-product__detail-section"
                      key={index}
                    >
                      <h3>{seccion.titulo}</h3>

                      <ul>
                        {seccion.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {producto.detalle.nota && (
                    <p className="modal-product__note">
                      {producto.detalle.nota}
                    </p>
                  )}

                </div>
              )}

              {esTorta && producto.precio16 != null ? (
                <div className="modal-product__sizes">

                  <div>
                    <span>16 cm</span>
                    <strong>
                      ${producto.precio16.toLocaleString('es-UY')}
                    </strong>
                    <small>
                      {producto.porciones16}
                    </small>
                  </div>


                  <div>
                    <span>22 cm</span>
                    <strong>
                      ${producto.precio22.toLocaleString('es-UY')}
                    </strong>
                    <small>
                      {producto.porciones22}
                    </small>
                  </div>

                </div>
              ) : (
                producto.precio && (
                  <strong className="modal-price">
                    ${producto.precio.toLocaleString('es-UY')}
                  </strong>
                )
              )}


              <a
                className="btn-primary"
                href={whatsappUrl(
                  `Hola Esmeralda Sweet 😊

Quisiera consultar por *${producto.nombre}*.

¿Me podrían contar disponibilidad, precio y cómo puedo realizar el pedido?

¡Muchas gracias! 💚`
                )}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Consultar por WhatsApp ↗
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}