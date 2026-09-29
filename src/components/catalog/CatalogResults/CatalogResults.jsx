import ProductoCard from '../../ProductoCard/ProductoCard';
import './CatalogResults.css';

const nombresCategoria = {
  dulce: 'Menú dulce',
  salado: 'Menú salado',
  desayunos: 'Desayunos',
};

export default function CatalogResults({
  categoriaData,
  opcion,
  productos,
  globalSearch = false,
  searchQuery = '',
}) {
  const titulo = globalSearch
    ? `Resultados para “${searchQuery.trim()}”`
    : opcion?.nombre;

  return (
    <div className={`catalog-results ${globalSearch ? 'catalog-results--search' : ''}`}>
      <div className="catalog-results__heading">
        <div>
          <p className="section-kicker">
            {globalSearch ? 'Todo el catálogo' : `${categoriaData?.nombre} · ${opcion?.nombre}`}
          </p>
          <h2>{titulo}</h2>
        </div>

        <span>
          {productos.length > 0
            ? `${productos.length} ${productos.length === 1 ? 'propuesta' : 'propuestas'}`
            : 'Sin coincidencias'}
        </span>
      </div>

      {productos.length > 0 ? (
        <div className="catalog-grid">
          {productos.map((producto) => (
            <div className="catalog-result-item" key={producto.id}>
              {globalSearch && (
                <span className="catalog-result-item__category">
                  {nombresCategoria[producto.categoria] || producto.categoria}
                </span>
              )}
              <ProductoCard
                producto={producto}
                categoria={
                  globalSearch
                    ? nombresCategoria[producto.categoria] || producto.categoria
                    : categoriaData?.nombre
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="catalog-empty">
          <span aria-hidden="true">⌕</span>
          <h3>No encontramos “{searchQuery.trim()}”</h3>
          <p>
            Probá con otra palabra o con una parte del nombre, por ejemplo
            “torta”, “choco” o “desayuno”.
          </p>
        </div>
      )}
    </div>
  );
}
