import { useRef } from 'react';
import './ProductImageGallery.css';

export default function ProductImageGallery({
  producto,
  imagenes,
  currentImage,
  onPrevious,
  onNext,
  onSwipe,
}) {
  const touchStartX = useRef(null);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 45 && imagenes.length > 1) {
      onSwipe(distance > 0 ? 'next' : 'previous');
    }

    touchStartX.current = null;
  };

  return (
    <div className="product-card__image">
      {imagenes.length > 1 && (
        <>
          <button
            type="button"
            className="product-image-nav product-image-nav--prev"
            onClick={onPrevious}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="product-image-nav product-image-nav--next"
            onClick={onNext}
            aria-label="Siguiente imagen"
          >
            ›
          </button>

          <div className="product-image-dots" aria-hidden="true">
            {imagenes.map((_, index) => (
              <span
                key={index}
                className={index === currentImage ? 'is-active' : ''}
              />
            ))}
          </div>
        </>
      )}

      <div
        className="product-card__image-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imagenes.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={index === currentImage ? producto.nombre : ''}
            aria-hidden={index !== currentImage}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={index === currentImage ? 'is-active' : ''}
          />
        ))}
      </div>

      <span className="product-card__badge">
        {producto.subsubcategoria === 'tortas-y-postres'
          ? 'Tortas y postres'
          : producto.categoria === 'dulce'
            ? 'Propuesta dulce'
            : producto.categoria === 'salado'
              ? 'Propuesta salada'
              : 'Propuesta de desayuno'}
      </span>

      <span className="product-card__quick">
        Ver detalle <span aria-hidden="true">↗</span>
      </span>
    </div>
  );
}
