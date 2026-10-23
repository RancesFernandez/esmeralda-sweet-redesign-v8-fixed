import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import './ProductImageLightbox.css';

export default function ProductImageLightbox({
  productoNombre,
  imagenes,
  currentImage,
  onClose,
  onPrevious,
  onNext,
  onSelectImage,
}) {
  const touchStartX = useRef(null);
  const callbacksRef = useRef({ onClose, onPrevious, onNext });
  callbacksRef.current = { onClose, onPrevious, onNext };

  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('product-image-lightbox-open');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        callbacksRef.current.onClose();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        callbacksRef.current.onPrevious();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        callbacksRef.current.onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.body.style.overflow = overflowAnterior;
      document.body.classList.remove('product-image-lightbox-open');
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || imagenes.length < 2) return;

    const distance = touchStartX.current - (event.changedTouches[0]?.clientX ?? touchStartX.current);
    if (Math.abs(distance) > 45) {
      if (distance > 0) onNext();
      else onPrevious();
    }
    touchStartX.current = null;
  };

  return createPortal(
    <div
      className="product-image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Imágenes de ${productoNombre}`}
      onClick={onClose}
    >
      <button
        type="button"
        className="product-image-lightbox__close"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Cerrar imagen"
        autoFocus
      >
        <span aria-hidden="true">×</span>
        <span className="product-image-lightbox__close-label">Cerrar</span>
      </button>

      <div
        className="product-image-lightbox__content"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="product-image-lightbox__image"
          src={imagenes[currentImage]}
          alt={`${productoNombre} - imagen ${currentImage + 1}`}
          decoding="async"
          draggable="false"
        />

        {imagenes.length > 1 && (
          <>
            <button
              type="button"
              className="product-image-lightbox__nav product-image-lightbox__nav--prev"
              onClick={onPrevious}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="product-image-lightbox__nav product-image-lightbox__nav--next"
              onClick={onNext}
              aria-label="Siguiente imagen"
            >
              ›
            </button>
            <div className="product-image-lightbox__dots" aria-label="Elegir imagen">
              {imagenes.map((_, index) => (
                <button
                  key={`${productoNombre}-${index}`}
                  type="button"
                  className={index === currentImage ? 'is-active' : ''}
                  onClick={() => onSelectImage(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                  aria-current={index === currentImage ? 'true' : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <p className="product-image-lightbox__caption">{productoNombre}</p>
    </div>,
    document.body,
  );
}
