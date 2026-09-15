import ProductoCard from '../../ProductoCard/ProductoCard';
import './CatalogResults.css';

export default function CatalogResults({ categoriaData, opcion, productos }) {
  return (
    <div className="catalog-results">
      <div className="catalog-results__heading">
        <div>
          <p className="section-kicker">
            {categoriaData?.nombre} · {opcion?.nombre}
          </p>
          <h2>{opcion?.nombre}</h2>
        </div>

        <span>
          {productos.length > 0
            ? `${productos.length} ${productos.length === 1 ? 'propuesta' : 'propuestas'}`
            : '1 espacio preparado'}
        </span>
      </div>

      <div className="catalog-grid">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            categoria={categoriaData?.nombre}
          />
        ))}
      </div>

      {productos.length === 0 && (
        <div className="catalog-note">
          <strong>Esta categoría ya está lista para crecer.</strong>{' '}
          Podés sumar nuevas variedades directamente como cards manteniendo esta misma estructura visual.
        </div>
      )}
    </div>
  );
}
