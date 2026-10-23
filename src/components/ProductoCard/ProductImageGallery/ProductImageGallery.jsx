import { useRef } from 'react';
import './ProductImageGallery.css';

export default function ProductImageGallery({
  producto,
  imagenes,
  currentImage,
  onPrevious,
  onNext,
  onSwipe,
  onOpen,
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
        <img
          key={imagenes[currentImage]}
          src={imagenes[currentImage]}
          alt={`${producto.nombre} - Esmeralda Sweet`}
          decoding="async"
          loading="lazy"
          fetchPriority="low"
          className="is-active"
        />
      </div>

      <button
        type="button"
        className="product-card__quick"
        aria-label={`Ver detalle de ${producto.nombre}`}
        onClick={(event) => {
          event.stopPropagation();
          onOpen();
        }}
      >
        Ver detalle <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
