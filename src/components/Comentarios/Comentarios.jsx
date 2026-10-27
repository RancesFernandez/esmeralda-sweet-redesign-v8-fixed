import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import './Comentarios.css';

const COMENTARIOS_POR_PAGINA = 8;
const CAMPOS_COMENTARIO = 'id, usuario, texto, estrellas, creado_en';

function formatearFecha(fecha) {
  if (!fecha) return '';
  const valor = new Date(fecha);
  if (Number.isNaN(valor.getTime())) return '';

  return new Intl.DateTimeFormat('es-UY', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(valor);
}

function obtenerIniciales(nombre = '') {
  return nombre
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte.charAt(0).toLocaleUpperCase('es-UY'))
    .join('') || 'ES';
}

function crearListaPaginas(actual, total) {
  if (total <= 7) return Array.from({ length: total }, (_, indice) => indice + 1);

  const candidatas = new Set([1, total, actual, actual - 1, actual + 1]);
  if (actual <= 3) [2, 3, 4].forEach((pagina) => candidatas.add(pagina));
  if (actual >= total - 2) [total - 3, total - 2, total - 1].forEach((pagina) => candidatas.add(pagina));

  const ordenadas = [...candidatas]
    .filter((pagina) => pagina >= 1 && pagina <= total)
    .sort((a, b) => a - b);

  return ordenadas.reduce((resultado, pagina, indice) => {
    if (indice > 0 && pagina - ordenadas[indice - 1] > 1) {
      resultado.push(`ellipsis-${pagina}`);
    }
    resultado.push(pagina);
    return resultado;
  }, []);
}

export default function Comentarios() {
  const [listaComentarios, setListaComentarios] = useState([]);
  const [totalComentarios, setTotalComentarios] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const [versionResenas, setVersionResenas] = useState(0);
  const [cargandoComentarios, setCargandoComentarios] = useState(true);
  const [errorComentarios, setErrorComentarios] = useState('');

  const [nuevoTexto, setNuevoTexto] = useState('');
  const [nuevoUsuario, setNuevoUsuario] = useState('');
  const [estrellasSeleccionadas, setEstrellasSeleccionadas] = useState(5);
  const [formOpen, setFormOpen] = useState(false);
  const [enlaceCopiado, setEnlaceCopiado] = useState(false);

  const cargarComentarios = useCallback(async (paginaSolicitada) => {
    setCargandoComentarios(true);
    setErrorComentarios('');

    if (!supabase) {
      setListaComentarios([]);
      setTotalComentarios(0);
      setCargandoComentarios(false);
      return;
    }

    const desde = (paginaSolicitada - 1) * COMENTARIOS_POR_PAGINA;
    const hasta = desde + COMENTARIOS_POR_PAGINA - 1;
    const { data, count, error } = await supabase
      .from('comentarios')
      .select(CAMPOS_COMENTARIO, { count: 'exact' })
      .order('creado_en', { ascending: false })
      .range(desde, hasta);

    if (error) {
      console.error('Error cargando comentarios:', error);
      setListaComentarios([]);
      setErrorComentarios('No pudimos cargar las reseñas. Inténtalo nuevamente más tarde.');
      setCargandoComentarios(false);
      return;
    }

    const total = count ?? 0;
    const paginasTotales = Math.ceil(total / COMENTARIOS_POR_PAGINA);

    // Evita dejar al usuario en una página vacía si el total cambia mientras navega.
    if (paginaSolicitada > 1 && (paginasTotales === 0 || paginaSolicitada > paginasTotales)) {
      setTotalComentarios(total);
      setPaginaActual(Math.max(1, paginasTotales));
      if (paginasTotales === 0) {
        setListaComentarios([]);
        setCargandoComentarios(false);
      }
      return;
    }

    setListaComentarios(data ?? []);
    setTotalComentarios(total);
    setCargandoComentarios(false);
  }, []);

  useEffect(() => {
    cargarComentarios(paginaActual);
  }, [cargarComentarios, paginaActual, versionResenas]);

  useEffect(() => {
    const abrirFormularioDesdeEnlace = () => {
      if (window.location.hash === '#dejanos-resena') {
        setFormOpen(true);
        window.setTimeout(() => {
          document.getElementById('dejanos-resena')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 120);
      }
    };

    abrirFormularioDesdeEnlace();
    window.addEventListener('hashchange', abrirFormularioDesdeEnlace);
    return () => window.removeEventListener('hashchange', abrirFormularioDesdeEnlace);
  }, []);

  const compartirEnlaceResena = async () => {
    const enlace = `${window.location.origin}/#dejanos-resena`;
    try {
      await navigator.clipboard.writeText(enlace);
      setEnlaceCopiado(true);
      window.setTimeout(() => setEnlaceCopiado(false), 2500);
    } catch {
      window.prompt('Copiá este enlace para compartirlo:', enlace);
    }
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const usuario = nuevoUsuario.trim();
    const texto = nuevoTexto.trim();

    if (!usuario || !texto) return;

    setErrorComentarios('');

    if (!supabase) {
      setErrorComentarios('Las reseñas estarán disponibles próximamente.');
      return;
    }

    const { error } = await supabase
      .from('comentarios')
      .insert({
        usuario,
        texto,
        estrellas: estrellasSeleccionadas
      });

    if (error) {
      console.error('Error guardando comentario:', error);
      setErrorComentarios('No pudimos guardar tu reseña. Inténtalo nuevamente.');
      return;
    }

    setNuevoTexto('');
    setNuevoUsuario('');
    setEstrellasSeleccionadas(5);
    setPaginaActual(1);
    // Fuerza la consulta incluso si ya estábamos en la primera página.
    setVersionResenas((actual) => actual + 1);
  };

  const cambiarPagina = (pagina) => {
    const paginasTotales = Math.ceil(totalComentarios / COMENTARIOS_POR_PAGINA);
    if (pagina < 1 || pagina > paginasTotales || pagina === paginaActual) return;

    setPaginaActual(pagina);
    document.getElementById('testimonios-lista')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  const totalPaginas = Math.ceil(totalComentarios / COMENTARIOS_POR_PAGINA);
  const primerComentario = totalComentarios === 0 ? 0 : (paginaActual - 1) * COMENTARIOS_POR_PAGINA + 1;
  const ultimoComentario = Math.min(paginaActual * COMENTARIOS_POR_PAGINA, totalComentarios);

  return (
    <section id="testimonios" className="reviews-section section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Lo que dicen de nosotros</p>
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle">Experiencias reales de quienes ya compartieron una mesa Esmeralda.</p>
        </div>

        {cargandoComentarios && (
          <div className="reviews-status" role="status" aria-live="polite">
            Cargando reseñas...
          </div>
        )}

        {errorComentarios && (
          <div className="reviews-status reviews-status--error" role="alert">
            {errorComentarios}
          </div>
        )}

        {!cargandoComentarios && !errorComentarios && supabase && totalComentarios === 0 && (
          <div className="reviews-status reviews-status--empty">
            Todavía no hay reseñas publicadas. ¡Podés ser la primera persona en compartir tu experiencia!
          </div>
        )}

        {!cargandoComentarios && listaComentarios.length > 0 && (
          <div id="testimonios-lista" className="reviews-list-wrap">
            <div className="review-results-meta" aria-live="polite">
              <span>Opiniones de nuestra comunidad</span>
              <span>Mostrando <strong>{primerComentario}–{ultimoComentario}</strong> de <strong>{totalComentarios}</strong></span>
            </div>

            <div className="reviews-grid">
              {listaComentarios.map((comentario) => {
                const nombre = comentario.usuario?.trim() || 'Cliente Esmeralda';
                const calificacion = Math.max(0, Math.min(5, Number(comentario.estrellas) || 0));
                const fecha = formatearFecha(comentario.creado_en);

                return (
                  <article className="review-card" key={comentario.id}>
                    <div className="review-card__topline">
                      <div className="review-card__rating" aria-label={`Calificación: ${calificacion} de 5 estrellas`}>
                        <span className="review-card__stars" aria-hidden="true">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <span key={n} className={n <= calificacion ? 'is-selected' : ''}>🍰</span>
                          ))}
                        </span>
                        <span className="review-card__rating-number">{calificacion}/5</span>
                      </div>
                      <span className="review-card__quote" aria-hidden="true">“</span>
                    </div>

                    <p className="review-card__text">{comentario.texto}</p>

                    <div className="review-card__author">
                      <span className="review-card__avatar" aria-hidden="true">
                        {obtenerIniciales(nombre)}
                      </span>
                      <div className="review-card__author-info">
                        <strong>{nombre}</strong>
                        <span>Cliente Esmeralda Sweet</span>
                      </div>
                      {fecha && <time className="review-card__date" dateTime={comentario.creado_en}>{fecha}</time>}
                    </div>
                  </article>
                );
              })}
            </div>

            {totalPaginas > 1 && (
              <nav className="review-pagination" aria-label="Paginación de testimonios">
                <button
                  type="button"
                  className="review-pagination__arrow"
                  onClick={() => cambiarPagina(paginaActual - 1)}
                  disabled={paginaActual === 1 || cargandoComentarios}
                  aria-label="Ir a la página anterior"
                >
                  <span aria-hidden="true">‹</span><span className="review-pagination__arrow-label">Anterior</span>
                </button>

                <div className="review-pagination__pages">
                  {crearListaPaginas(paginaActual, totalPaginas).map((pagina) => (
                    typeof pagina === 'number' ? (
                      <button
                        type="button"
                        key={pagina}
                        className={`review-pagination__page${pagina === paginaActual ? ' is-active' : ''}`}
                        onClick={() => cambiarPagina(pagina)}
                        aria-current={pagina === paginaActual ? 'page' : undefined}
                        aria-label={`Página ${pagina}`}
                        disabled={cargandoComentarios}
                      >
                        {pagina}
                      </button>
                    ) : (
                      <span className="review-pagination__ellipsis" key={pagina} aria-hidden="true">…</span>
                    )
                  ))}
                </div>

                <button
                  type="button"
                  className="review-pagination__arrow"
                  onClick={() => cambiarPagina(paginaActual + 1)}
                  disabled={paginaActual === totalPaginas || cargandoComentarios}
                  aria-label="Ir a la página siguiente"
                >
                  <span className="review-pagination__arrow-label">Siguiente</span><span aria-hidden="true">›</span>
                </button>
              </nav>
            )}
          </div>
        )}

        {supabase && (
          <>
            <div className="review-share">
              <p>¿Ya probaste nuestras delicias? Nos encantaría conocer tu experiencia.</p>
              <button type="button" className="review-share__button" onClick={compartirEnlaceResena}>
                <span aria-hidden="true"></span> {enlaceCopiado ? '¡Enlace copiado!' : 'Compartir enlace para dejar una reseña'}
              </button>
            </div>
            <details id="dejanos-resena" className="review-form-wrap" open={formOpen} onToggle={(e) => setFormOpen(e.currentTarget.open)}>
              <summary onClick={(e) => { e.preventDefault(); setFormOpen((actual) => !actual); }}>Dejanos tu reseña</summary>
              <form onSubmit={manejarEnvio} className="review-form">
                <input required minLength={2} maxLength={80} value={nuevoUsuario} onChange={(e) => setNuevoUsuario(e.target.value)} placeholder="Tu nombre" aria-label="Tu nombre" />
                <textarea required minLength={10} maxLength={2000} value={nuevoTexto} onChange={(e) => setNuevoTexto(e.target.value)} rows="3" placeholder="Contanos tu experiencia..." aria-label="Tu experiencia" />
                <div className="review-form__bottom">
                  <div className="review-cakes-picker" role="group" aria-label="Tu calificación">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        type="button"
                        key={n}
                        onClick={() => setEstrellasSeleccionadas(n)}
                        className={n <= estrellasSeleccionadas ? 'is-selected' : ''}
                        aria-label={`Calificar con ${n} de 5 estrellas`}
                        aria-pressed={estrellasSeleccionadas === n}
                      >
                        🍰
                      </button>
                    ))}
                  </div>
                  <button className="btn-primary" type="submit">Publicar reseña</button>
                </div>
              </form>
            </details>
          </>
        )}
      </div>
    </section>
  );
}
