import React, { useEffect, useState } from 'react';
import { whatsappUrl } from '../data/config';

const initialForm = {
  nombre: '',
  tipo: 'Cumpleaños',
  personas: '10-20',
  fecha: '',
  mensaje: ''
};

export default function CotizacionRapida({ isOpen, onClose = () => { } }) {
  const [form, setForm] = useState(initialForm);

  const getLocalDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const getMinQuoteDate = () => {
    const date = new Date();

    // Hoy + 2 días = primera fecha permitida.
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 2);

    return getLocalDateString(date);
  };

  const minQuoteDate = getMinQuoteDate();

  const update = (event) => {
    const { name, value } = event.target;

    if (name === 'fecha') {
      // No permitir hoy, mañana ni ninguna fecha anterior.
      if (value && value < minQuoteDate) {
        setForm((current) => ({
          ...current,
          fecha: '',
        }));
        return;
      }
    }

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
    }
  }, [isOpen]);

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

    if (form.fecha && form.fecha < minQuoteDate) {
      alert('Por favor seleccioná una fecha a partir de pasado mañana.');
      return;
    }

    const text = [
      'Hola Esmeralda Sweet 😊',
      '',
      `Mi nombre es ${form.nombre} y quisiera consultar por una propuesta para ${form.tipo.toLowerCase()}.`,
      '',
      `👥 Somos aproximadamente ${form.personas} personas.`,
      `📅 La fecha estimada es ${form.fecha || 'a confirmar'}.`,
      form.mensaje
        ? `💭 Estoy buscando: ${form.mensaje}`
        : '',
      '',
      '¿Podrían orientarme con las opciones disponibles y pasarme una propuesta?',
      '',
      '¡Muchas gracias! 💚',
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
              placeholder="Ej.: María Pérez"
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
            <input
              className="quote-form__date"
              type="date"
              name="fecha"
              min={minQuoteDate}
              value={form.fecha}
              onChange={update}
              onBlur={(event) => {
                if (event.target.value && event.target.value < minQuoteDate) {
                  setForm((current) => ({
                    ...current,
                    fecha: '',
                  }));
                }
              }}
              onInvalid={(event) => {
                event.target.setCustomValidity(
                  `Seleccioná una fecha a partir del ${minQuoteDate.split('-').reverse().join('/')}.`
                );
              }}
              onInput={(event) => {
                event.target.setCustomValidity('');
              }}
              required
            />
            <small className="quote-form__hint">
              Disponible a partir de pasado mañana.
            </small>

          </label>

          <label className="quote-form__field quote-form__field--full">
            <span>¿Qué tenés en mente?</span>

            <textarea
              className="quote-form__idea"
              name="mensaje"
              value={form.mensaje}
              onChange={update}
              rows="4"
              placeholder="Ej.: mesa dulce, 20 personas, tonos verdes, temática..."
            />

            <small className="quote-form__hint">
              Contanos brevemente qué estás buscando para poder orientarte mejor.
            </small>
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
