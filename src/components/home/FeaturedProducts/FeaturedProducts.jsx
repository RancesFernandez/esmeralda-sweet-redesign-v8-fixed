import { Link } from 'react-router-dom';
import { productos } from '../../../data/productos';
import ProductoCard from '../../ProductoCard/ProductoCard';
import './FeaturedProducts.css';

const DESTACADOS_IDS = [101, 301, 302, 403];

export default function FeaturedProducts() {
  const destacados = DESTACADOS_IDS
    .map((id) => productos.find((producto) => producto.id === id))
    .filter(Boolean);

  return (
    <>
      <div className="featured-divider">
        <span>Algunas de nuestras propuestas</span>
        <i aria-hidden="true" />
      </div>

      <div className="product-grid">
        {destacados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>

      <div className="center-action">
        <Link to="/menu-dulce" className="btn-secondary">Ver todo el menú</Link>
        <a href="#cotizar" className="text-link center-action__link">
          Necesito algo personalizado →
        </a>
      </div>
    </>
  );
}
