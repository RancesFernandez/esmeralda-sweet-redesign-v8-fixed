import './FaqSection.css';

const FAQS = [
  ['¿Con cuánta antelación debo realizar mi pedido?', 'Los pedidos deben realizarse con 2-3 días de anticipación. ¿Lo necesitás antes? Contactanos y trataremos de buscar una solución.'],
  ['¿Dónde se retiran?', 'Para retiros con coordinación previa, nos encontramos ubicados en el Centro.'],
  ['¿Cuándo tomamos pedidos?', 'Tomamos pedidos de lunes a sábado.'],
  ['¿Realizan envíos?', 'Con coordinación previa en Montevideo por cadetería en un rango mínimo de 2 horas. Consultanos por el barrio y te pasamos la info.'],
];

export default function FaqSection() {
  return (
    <section id="preguntas" className="faq-section section section--soft">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Antes de pedir</p>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>

        <div className="faq-list">
          {FAQS.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
