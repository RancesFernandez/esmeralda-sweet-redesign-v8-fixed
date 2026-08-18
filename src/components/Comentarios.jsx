import React, { useState } from 'react';

export default function Comentarios() {
  const [listaComentarios, setListaComentarios] = useState([
    { id: 1, usuario: 'María L.', texto: 'Las tortas son increíbles y la presentación quedó preciosa.', estrellas: 5 },
    { id: 2, usuario: 'Juan P.', texto: 'Muy buena atención, todo fresco y entregado a tiempo.', estrellas: 5 },
    { id: 3, usuario: 'Carla R.', texto: 'Pedimos una mesa para un cumpleaños y fue un éxito.', estrellas: 5 },
    { id: 4, usuario: 'Sofía M.', texto: 'Hermoso detalle para regalar. Volvería a pedir sin dudas.', estrellas: 5 }
  ]);

  const [nuevoTexto, setNuevoTexto] = useState('');
  const [nuevoUsuario, setNuevoUsuario] = useState('');
  const [estrellasSeleccionadas, setEstrellasSeleccionadas] = useState(5);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nuevoTexto.trim() || !nuevoUsuario.trim()) return;
    setListaComentarios([
      { id: Date.now(), usuario: nuevoUsuario, texto: nuevoTexto, estrellas: estrellasSeleccionadas },
      ...listaComentarios
    ]);
    setNuevoTexto('');
    setNuevoUsuario('');
    setEstrellasSeleccionadas(5);
  };

  return (
    <section className="reviews-section section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Lo que dicen de nosotros</p>
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle">Experiencias reales de quienes ya compartieron una mesa Esmeralda.</p>
        </div>

        <div className="reviews-grid">
          {listaComentarios.slice(0, 4).map((comentario) => (
            <article className="review-card" key={comentario.id}>
              <div className="review-cakes" aria-label={`Calificación: ${comentario.estrellas} de 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={n <= comentario.estrellas ? 'is-selected' : ''}
                    aria-hidden="true"
                  >
                    🍰
                  </span>
                ))}
              </div>
              <p>“{comentario.texto}”</p>
              <strong>{comentario.usuario}</strong>
            </article>
          ))}
        </div>

        <details className="review-form-wrap">
          <summary>Dejanos tu reseña</summary>
          <form onSubmit={manejarEnvio} className="review-form">
            <input value={nuevoUsuario} onChange={(e) => setNuevoUsuario(e.target.value)} placeholder="Tu nombre" />
            <textarea value={nuevoTexto} onChange={(e) => setNuevoTexto(e.target.value)} rows="3" placeholder="Contanos tu experiencia..." />
            <div className="review-form__bottom">
              <div className="review-cakes-picker">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setEstrellasSeleccionadas(n)}
                    className={n <= estrellasSeleccionadas ? 'is-selected' : ''}
                    aria-label={`Calificar con ${n} de 5`}
                  >
                    🍰
                  </button>
                ))}
              </div>
              <button className="btn-primary" type="submit">Publicar</button>
            </div>
          </form>
        </details>
      </div>
    </section>
  );
}
