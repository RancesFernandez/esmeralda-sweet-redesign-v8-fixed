import { useEffect, useRef } from 'react';
import { whatsappUrl } from '../../../data/config';
import './ProductModal.css';

export default function ProductModal({
  producto,
  categoria,
  imagen,
  imagenes,
  currentImage,
  onClose,
  onPrevious,
  onNext,
  onSelectImage,
}) {
  const touchStartX = useRef(null);
  const esTorta = producto.subsubcategoria === 'tortas-y-postres';

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('product-modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('product-modal-open');
    };
  }, [onClose]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 45 && imagenes.length > 1) {
      if (distance > 0) onNext();
      else onPrevious();
    }

    touchStartX.current = null;
  };

  return (
    <div className="modal-backdrop product-modal-backdrop" onClick={onClose}>
      <div
        className="modal-product"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`producto-${producto.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
        >
          ×
        </button>

        <div
          className="modal-product__image"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={imagen} alt={producto.nombre} decoding="async" />

          {imagenes.length > 1 && (
            <>
              <button
                type="button"
                className="modal-image-nav modal-image-nav--prev"
                onClick={onPrevious}
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                className="modal-image-nav modal-image-nav--next"
                onClick={onNext}
                aria-label="Siguiente imagen"
              >
                ›
              </button>

              <div className="modal-image-dots">
                {imagenes.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={index === currentImage ? 'is-active' : ''}
                    onClick={(event) => {
                      event.stopPropagation();
                      onSelectImage(index);
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

          <h2 id={`producto-${producto.id}`}>{producto.nombre}</h2>

          {producto.descripcion !== 'Información completa al ingresar.' && (
            <p className="modal-product__description">{producto.descripcion}</p>
          )}

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
                <div className="modal-product__detail-section" key={index}>
                  <h3>{seccion.titulo}</h3>
                  <ul>
                    {seccion.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {producto.detalle.nota && (
                <p className="modal-product__note">{producto.detalle.nota}</p>
              )}
            </div>
          )}

          {esTorta && producto.precio16 != null ? (
            <div className="modal-product__sizes">
              <div>
                <span>16 cm</span>
                <strong>${producto.precio16.toLocaleString('es-UY')}</strong>
                <small>{producto.porciones16}</small>
              </div>
              <div>
                <span>22 cm</span>
                <strong>${producto.precio22.toLocaleString('es-UY')}</strong>
                <small>{producto.porciones22}</small>
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
            href={whatsappUrl(`Hola Esmeralda Sweet 😊

Quisiera consultar por *${producto.nombre}*.

¿Me podrían contar disponibilidad, precio y cómo puedo realizar el pedido?

¡Muchas gracias! 💚`)}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            Consultar por WhatsApp ↗
          </a>
        </div>
      </div>
    </div>
  );
}
