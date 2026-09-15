import { whatsappUrl, MSG_EVENTO } from '../../../data/config';
import './EventCta.css';

export default function EventCta() {
  return (
    <section className="event-cta">
      <div className="section-container event-cta__inner">
        <p className="section-kicker">¿Tenés un evento o taller?</p>
        <h2>Hagamos algo especial para tu mesa.</h2>
        <p>Contanos qué estás organizando y armamos una propuesta a medida.</p>
        <a
          className="btn-primary"
          href={whatsappUrl(MSG_EVENTO)}
          target="_blank"
          rel="noreferrer"
        >
          Consultar por mi evento
        </a>
      </div>
    </section>
  );
}
