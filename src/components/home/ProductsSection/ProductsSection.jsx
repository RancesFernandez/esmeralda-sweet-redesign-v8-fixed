import MenuShowcase from '../MenuShowcase/MenuShowcase';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import './ProductsSection.css';

export default function ProductsSection() {
  return (
    <section id="productos" className="section products-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Para compartir · para celebrar · para regalar</p>
          <h2 className="section-title">Nuestros productos</h2>
          <p className="section-subtitle">
            Elegí tu propuesta favorita y pedila directo por WhatsApp.
          </p>
        </div>

        <MenuShowcase />
        <FeaturedProducts />
      </div>
    </section>
  );
}
