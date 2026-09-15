import React from 'react';
import MenuPage from '../MenuPage/MenuPage';
import SEO, { buildWebPageSchema } from '../../components/SEO/SEO';

export default function MenuDesayunos() {
  const title = 'Desayunos artesanales en Montevideo | Esmeralda Sweet';
  const description = 'Desayunos artesanales para regalar, compartir y sorprender. Opciones individuales y para compartir de Esmeralda Sweet en Montevideo.';

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/desayunos"
        jsonLd={buildWebPageSchema({ title, description, path: '/desayunos' })}
      />
      <MenuPage
        categoria="desayunos"
        titulo="Desayunos"
        subtitulo="Opciones individuales y para compartir, pensadas para empezar el día con algo rico."
      />
    </>
  );
}
