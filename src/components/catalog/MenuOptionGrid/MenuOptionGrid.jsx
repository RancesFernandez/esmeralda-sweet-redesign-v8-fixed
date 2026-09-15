import { imagenes } from '../../../data/imagenes';
import './MenuOptionGrid.css';

export default function MenuOptionGrid({ opciones = [], selectedId, onSelect }) {
  return (
    <div className="menu-option-grid">
      {opciones.map((item) => {
        const isActive = selectedId === item.id;

        return (
          <button
            key={item.id}
            className={`menu-option-card ${isActive ? 'is-active' : ''}`}
            onClick={() => onSelect(item.id)}
            type="button"
            aria-pressed={isActive}
          >
            <span className="menu-option-card__image" aria-hidden="true">
              <img src={imagenes.productos[item.imagenKey]} alt="" />
            </span>

            <span className="menu-option-card__overlay" aria-hidden="true" />

            <span className="menu-option-card__content">
              <strong>{item.nombre}</strong>
              <span>{item.descripcion}</span>
              <small>{isActive ? 'Seleccionado' : 'Explorar →'}</small>
            </span>
          </button>
        );
      })}
    </div>
  );
}
