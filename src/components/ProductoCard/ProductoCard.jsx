import { useEffect, useMemo, useState } from 'react';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery';
import ProductModal from './ProductModal/ProductModal';
import './ProductoCard.css';

export default function ProductoCard({ producto, categoria }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const listaImagenes = useMemo(
    () => (producto.imagenes?.length > 0 ? producto.imagenes : [producto.imagen]),
    [producto.imagenes, producto.imagen],
  );

  const imagenActual = listaImagenes[currentImage];
  const esTorta = producto.subsubcategoria === 'tortas-y-postres';

  useEffect(() => {
    listaImagenes.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [listaImagenes]);

  useEffect(() => {
    if (!open) {
      setCurrentImage(0);
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const cambiarImagen = (nuevoIndice) => {
    setCurrentImage(nuevoIndice);
  };

  const anteriorImagen = (event) => {
    event?.stopPropagation();
    cambiarImagen((currentImage - 1 + listaImagenes.length) % listaImagenes.length);
  };

  const siguienteImagen = (event) => {
    event?.stopPropagation();
    cambiarImagen((currentImage + 1) % listaImagenes.length);
  };

  const manejarSwipe = (direction) => {
    if (direction === 'next') {
      siguienteImagen();
    } else {
      anteriorImagen();
    }
  };

  return (
    <>
      <article
        className={`product-card ${esTorta ? 'product-card--torta' : ''}`}
        tabIndex={0}
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
        <ProductImageGallery
          producto={producto}
          imagenes={listaImagenes}
          currentImage={currentImage}
          onPrevious={anteriorImagen}
          onNext={siguienteImagen}
          onSwipe={manejarSwipe}
        />

        <div className="product-card__body">
          <div className="product-card__top">
            <h3>{producto.nombre}</h3>
          </div>

          <p className="product-card__description">{producto.descripcion}</p>

          {esTorta && producto.precio16 != null && (
            <div className="product-card__sizes">
              <div className="product-card__size">
                <span>16 cm</span>
                <strong>${producto.precio16.toLocaleString('es-UY')}</strong>
                <small>{producto.porciones16}</small>
              </div>

              <div className="product-card__size">
                <span>22 cm</span>
                <strong>${producto.precio22.toLocaleString('es-UY')}</strong>
                <small>{producto.porciones22}</small>
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

      {open && (
        <ProductModal
          producto={producto}
          categoria={categoria}
          imagen={imagenActual}
          imagenes={listaImagenes}
          currentImage={currentImage}
          onClose={() => setOpen(false)}
          onPrevious={() => anteriorImagen()}
          onNext={() => siguienteImagen()}
          onSelectImage={cambiarImagen}
        />
      )}
    </>
  );
}
