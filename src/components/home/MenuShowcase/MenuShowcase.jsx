import { Link } from 'react-router-dom';
import { imagenes } from '../../../data/imagenes';
import './MenuShowcase.css';

const MENUS = [
  {
    id: 'dulce',
    title: 'Menú dulce',
    description: 'Tortas, masitas, alfajores y más...',
    image: imagenes.productos.lemonPie,
    tags: ['Tortas', 'Masitas', 'Alfajores', 'Muffins', 'Rolls de canela'],
    path: '/menu-dulce',
  },
  {
    id: 'salado',
    title: 'Menú salado',
    description: 'Saladitos y picadas.',
    image: imagenes.productos.sandwiches,
    tags: ['Saladitos', 'Picadas'],
    path: '/menu-salado',
  },
  {
    id: 'desayunos',
    title: 'Desayunos',
    description: 'Opciones individuales y para compartir.',
    image: imagenes.productos.desayunoCompartido,
    tags: ['Individuales', 'Para compartir'],
    path: '/desayunos',
  },
];

export default function MenuShowcase() {
  return (
    <div className="menu-showcase">
      {MENUS.map((menu) => (
        <Link
          key={menu.id}
          to={menu.path}
          className={`menu-showcase-card menu-showcase-card--${menu.id}`}
        >
          <div
            className="menu-showcase-card__image"
            style={{ backgroundImage: `url(${menu.image})` }}
          />
          <div className="menu-showcase-card__overlay" />
          <div className="menu-showcase-card__top">
            <span className="menu-showcase-card__eyebrow" />
            <span className="menu-showcase-card__arrow" aria-hidden="true">↗</span>
          </div>
          <div className="menu-showcase-card__content">
            <h3>{menu.title}</h3>
            <p>{menu.description}</p>
            <div className="menu-showcase-tags">
              {menu.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <span className="menu-showcase-card__cta">
            Explorar {menu.title.toLowerCase()} <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
