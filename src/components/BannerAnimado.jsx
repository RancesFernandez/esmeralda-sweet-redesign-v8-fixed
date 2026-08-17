import React from 'react';

export default function BannerAnimado() {
  {/* DOCUMENTACIÓN: Inyección de la animación CSS en el documento */}
  const codigoAnimacion = `
    @keyframes moverTexto {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
  `;

  return (
    <div style={{
      backgroundColor: 'var(--verde-claro)',
      color: 'var(--verde-esmeralda)',
      overflow: 'hidden', /* Oculta el texto que se sale de la pantalla */
      whiteSpace: 'nowrap', /* Evita que el texto salte de línea */
      padding: '0.6rem 0',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      letterSpacing: '1.5px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: '100%'
    }}>
      {/* Etiqueta de estilo interna para registrar los @keyframes en el navegador */}
      <style>{codigoAnimacion}</style>

      {/* DOCUMENTACIÓN: Contenedor que se desplaza. Duplicamos el contenido para que el bucle se vea infinito y sin cortes */}
      <div style={{
        display: 'inline-block',
        paddingLeft: '100%', /* Comienza fuera de la pantalla a la derecha */
        animation: 'moverTexto 15s linear infinite' /* Ajusta los '15s' para cambiar la velocidad (más segundos = más lento) */
      }}>
        <span style={{ marginRight: '4rem' }}>🔥 ¡OFERTAS IMPERDIBLES EN NUESTRO MENÚ DULCE! 🔥</span>
        <span style={{ marginRight: '4rem' }}>✨ ENCARGOS PARA EVENTOS CON 48HS DE ANTICIPACIÓN ✨</span>
        <span style={{ marginRight: '4rem' }}>🔥 ¡OFERTAS IMPERDIBLES EN NUESTRO MENÚ DULCE! 🔥</span>
        <span style={{ marginRight: '4rem' }}>✨ ENCARGOS PARA EVENTOS CON 48HS DE ANTICIPACIÓN ✨</span>
      </div>
    </div>
  );
}