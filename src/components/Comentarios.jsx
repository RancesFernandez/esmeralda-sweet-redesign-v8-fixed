import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Comentarios() {
  const [listaComentarios, setListaComentarios] = useState([]);
  const [cargandoComentarios, setCargandoComentarios] = useState(true);
  const [errorComentarios, setErrorComentarios] = useState('');

  const [nuevoTexto, setNuevoTexto] = useState('');
  const [nuevoUsuario, setNuevoUsuario] = useState('');
  const [estrellasSeleccionadas, setEstrellasSeleccionadas] = useState(5);

  useEffect(() => {
    cargarComentarios();
  }, []);

  const cargarComentarios = async () => {
    setCargandoComentarios(true);
    setErrorComentarios('');

    const { data, error } = await supabase
      .from('comentarios')
      .select('id, usuario, texto, estrellas, creado_en')
      .order('creado_en', { ascending: false });

    if (error) {
      console.error('Error cargando comentarios:', error);
      setErrorComentarios('No pudimos cargar las reseñas.');
    } else {
      setListaComentarios(data ?? []);
    }

    setCargandoComentarios(false);
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const usuario = nuevoUsuario.trim();
    const texto = nuevoTexto.trim();

    if (!usuario || !texto) return;

    setErrorComentarios('');

    const { data, error } = await supabase
      .from('comentarios')
      .insert({
        usuario,
        texto,
        estrellas: estrellasSeleccionadas
      })
      .select()
      .single();

    if (error) {
      console.error('Error guardando comentario:', error);
      setErrorComentarios('No pudimos guardar tu reseña. Inténtalo nuevamente.');
      return;
    }

    setListaComentarios((actuales) => [
      data,
      ...actuales
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

        {cargandoComentarios && (
          <div className="reviews-status">
            Cargando reseñas...
          </div>
        )}

        {errorComentarios && (
          <div className="reviews-status reviews-status--error">
            {errorComentarios}
          </div>
        )}

        <div className="reviews-grid">
          {listaComentarios.slice(0, 6).map((comentario) => (
            <article className="review-card" key={comentario.id}>

              <div className="review-card__quote">
                “
              </div>

              <div
                className="review-cakes"
                aria-label={`Calificación: ${comentario.estrellas} de 5`}
              >
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

              <p className="review-card__text">
                {comentario.texto}
              </p>

              <div className="review-card__author">
                <span className="review-card__avatar">
                  {comentario.usuario.charAt(0).toUpperCase()}
                </span>

                <div>
                  <strong>{comentario.usuario}</strong>
                  <span>Cliente Esmeralda Sweet</span>
                </div>
              </div>

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
