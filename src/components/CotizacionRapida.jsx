import React, { useEffect, useState } from 'react';
import { whatsappUrl } from '../data/config';

const initialForm = {
  nombre:'',
  tipo: 'Cumpleaños',
  personas: '10-20',
  fecha: '',
  mensaje: ''
};

export default function CotizacionRapida({ isOpen, onClose = () => {} }) {
  const [form, setForm] = useState(initialForm);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const submit = (event) => {
    event.preventDefault();

    const text = [
      'Hola Esmeralda Sweet, quiero consultar por un pedido.',
      `Me llamo: ${form.nombre}`,
      `Tipo de ocasión: ${form.tipo}`,
      `Cantidad de personas: ${form.personas}`,
      `Fecha: ${form.fecha || 'A confirmar'}`,
      form.mensaje ? `Detalles: ${form.mensaje}` : '',
    ].filter(Boolean).join('\n');

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (isOpen === false) return null;

  if (isOpen === undefined) {
    return (
      <section id="cotizar" className="quote-section section">
        <div className="section-container quote-grid">
          <div className="quote-copy">
            <p className="section-kicker">¿Tenés una fecha especial?</p>
            <h2 className="section-title">Contanos qué necesitás y armamos una propuesta.</h2>
            <p>
              Prepará tu consulta en pocos pasos y enviala directamente por WhatsApp.
              No confirma una reserva.
            </p>
            <div className="quote-trust">
              <span>✓ Atención personalizada</span>
              <span>✓ Propuestas a medida</span>
              <span>✓ Coordinación por WhatsApp</span>
            </div>
          </div>
          <div className="quote-inline-card">
            <p className="section-kicker">Más rápido</p>
            <h3>¿Querés cotizar ahora?</h3>
            <p>Completá los datos esenciales y te llevamos a WhatsApp con el mensaje listo.</p>
            <button className="btn-primary" type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-esmeralda-quote'))}>
              Abrir cotización rápida ↗
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="quote-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="quote-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar cotización rápida"
        >
          ×
        </button>

        <div className="quote-modal__intro">
          <p className="section-kicker">Cotización rápida</p>
          <h2 id="quote-modal-title">Contanos qué tenés en mente.</h2>
          <p>
            Completá estos datos y prepararemos una consulta lista para enviar
            por WhatsApp. No confirma una reserva.
          </p>
        </div>

        <form className="quote-form quote-form--modal" onSubmit={submit}>

        <label>
            Nombre y Apellido
            <input
              required
              name="nombre"
              value={form.nombre}
              onChange={update}
              placeholder="Victoria Lopez"
            />
          </label>

          <label>
            Tipo de ocasión
            <select name="tipo" value={form.tipo} onChange={update}>
              <option>Cumpleaños</option>
              <option>Reunión</option>
              <option>Regalo</option>
              <option>Evento corporativo</option>
              <option>Casamiento</option>
              <option>Otro</option>
            </select>
          </label>

          <label>
            Personas
            <select name="personas" value={form.personas} onChange={update}>
              <option>1-10</option>
              <option>10-20</option>
              <option>20-40</option>
              <option>40+</option>
            </select>
          </label>

          <label>
            Fecha estimada
            <input className="quote-form__date" type="date" name="fecha" min={new Date().toISOString().split('T')[0]} value={form.fecha} onChange={update} />
          </label>

          <label>
            ¿Qué tenés en mente?
            <textarea
              className="quote-form__idea"
              name="mensaje"
              value={form.mensaje}
              onChange={update}
              rows="3"
              placeholder="Ej.: mesa dulce, 20 personas, tonos verdes..."
            />
          </label>

          <button className="btn-primary" type="submit">
            Continuar por WhatsApp ↗
          </button>

          <small>
            Te llevaremos a WhatsApp con la información que completaste.
          </small>
        </form>
      </div>
    </div>
  );
}
