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
  onOpenImage,
}) {
  const touchStartX = useRef(null);
  const suppressClick = useRef(false);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 45 && imagenes.length > 1) {
      suppressClick.current = true;
      onSwipe(distance > 0 ? 'next' : 'previous');
      window.setTimeout(() => { suppressClick.current = false; }, 350);
    }

    touchStartX.current = null;
  };

  return (
    <div className="product-card__image" onClick={(event) => event.stopPropagation()}>
      {imagenes.length > 1 && (
        <>
          <button
            type="button"
            className="product-image-nav product-image-nav--prev"
            onClick={(event) => { event.stopPropagation(); onPrevious(event); }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="product-image-nav product-image-nav--next"
            onClick={(event) => { event.stopPropagation(); onNext(event); }}
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
        role="button"
        tabIndex={0}
        aria-label={`Ampliar imagen de ${producto.nombre}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(event) => {
          event.stopPropagation();
          if (suppressClick.current) return;
          onOpenImage();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.stopPropagation();
            onOpenImage();
          }
        }}
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
