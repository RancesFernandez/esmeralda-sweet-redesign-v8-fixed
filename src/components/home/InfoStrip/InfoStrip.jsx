import './InfoStrip.css';

const BENEFICIOS = [
  ['🤲', 'Hecho artesanalmente', 'Cada pedido es único y se prepara especialmente para ti.'],
  ['⌛', 'Pedidos con anticipación', 'Tomamos pedidos con 2-3 días de anticipación.'],
  ['⏱️', 'Pedidos express', '¿Necesitás tu pedido con urgencia? Contactanos y buscamos la mejor solución.'],
  ['🚚', 'Entrega coordinada', 'Realizamos envíos en Montevideo o podés retirar tu pedido en nuestro pick up en el Centro.'],
];

export default function InfoStrip() {
  return (
    <section className="info-strip section-container" aria-label="Beneficios de Esmeralda Sweet">
      {BENEFICIOS.map(([icon, title, text]) => (
        <article className="info-item" key={title}>
          <span className="info-icon" aria-hidden="true">{icon}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}
