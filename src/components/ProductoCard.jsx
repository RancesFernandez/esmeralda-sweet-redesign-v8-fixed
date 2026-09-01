import React, { useEffect, useState } from 'react';
import { whatsappUrl } from '../data/config';

export default function ProductoCard({ producto, categoria }) {
  const [open, setOpen] = useState(false);

  const esTorta = producto.subsubcategoria === 'tortas-y-postres';

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

          <img
            src={producto.imagen}
            alt={producto.nombre}
            loading="lazy"
            decoding="async"
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


          {esTorta && (
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


            <img
              src={producto.imagen}
              alt={producto.nombre}
            />


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


              {esTorta ? (
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
                  `Hola Esmeralda Sweet, quiero pedir ${producto.nombre}`
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