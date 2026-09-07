import React from 'react';

export default function BannerAnimado() {
  return (
    <div style={{
      backgroundColor: 'var(--verde-claro)',
      color: 'var(--verde-esmeralda)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '0.6rem 0',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      letterSpacing: '1.5px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: '100%'
    }}>
      <div style={{
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'moverTexto 15s linear infinite'
      }}>
        <span style={{ marginRight: '4rem' }}>🔥 ¡OFERTAS IMPERDIBLES EN NUESTRO MENÚ DULCE! 🔥</span>
        <span style={{ marginRight: '4rem' }}>✨ ENCARGOS PARA EVENTOS CON 48HS DE ANTICIPACIÓN ✨</span>
        <span style={{ marginRight: '4rem' }}>🔥 ¡OFERTAS IMPERDIBLES EN NUESTRO MENÚ DULCE! 🔥</span>
        <span style={{ marginRight: '4rem' }}>✨ ENCARGOS PARA EVENTOS CON 48HS DE ANTICIPACIÓN ✨</span>
      </div>
    </div>
  );
}