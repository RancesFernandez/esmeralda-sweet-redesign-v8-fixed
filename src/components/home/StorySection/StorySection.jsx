import { imagenes } from '../../../data/imagenes';
import './StorySection.css';

export default function StorySection() {
  return (
    <section id="nuestra-historia" className="story-section section">
      <div className="section-container story-grid">
        <div className="story-image">
          <img
            src={imagenes.nosotros.nosotros}
            alt="Trabajo artesanal de Esmeralda Sweet"
            loading="lazy"
          />
        </div>

        <div className="story-copy">
          <p className="section-kicker">Nuestra historia</p>
          <h2 className="section-title">La suma de un camino</h2>
          <p>
            Esmeralda Sweet nace del gusto por crear cosas lindas, ricas y
            memorables. Creemos que una mesa no es solamente comida: es el
            lugar donde una conversación empieza, una celebración toma forma
            y un momento se convierte en recuerdo.
          </p>
          <p>
            Por eso cuidamos la selección de ingredientes, la elaboración y
            también la presentación final. Queremos que abrir una caja o
            encontrarse con una mesa Esmeralda sea parte de la experiencia.
          </p>
        </div>
      </div>
    </section>
  );
}
