import './ProcessSection.css';

const PASOS = [
  ['01', 'Elegí tu favorito', 'Recorré nuestros productos y encontrá la propuesta que más se adapta a tu momento.'],
  ['02', 'Escribinos', 'Hacé tu pedido directo por WhatsApp y contanos fecha, cantidad y preferencias.'],
  ['03', 'Coordinamos', 'Te confirmamos disponibilidad, horario y todos los detalles antes de preparar tu pedido.'],
  ['04', 'Disfrutá', 'Recibís una propuesta lista para poner en la mesa y compartir.'],
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="section process-section section--soft">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Simple, cercano y sin vueltas</p>
          <h2 className="section-title">Del pedido a la mesa</h2>
          <p className="section-subtitle">Así funciona nuestra forma de trabajar.</p>
        </div>

        <div className="steps-grid">
          {PASOS.map(([number, title, text]) => (
            <article className="step-card" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
