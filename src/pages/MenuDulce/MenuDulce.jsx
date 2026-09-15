import React from 'react';
import MenuPage from '../MenuPage/MenuPage';
import SEO, { buildWebPageSchema } from '../../components/SEO/SEO';
export default function MenuDulce() {
  const title = 'Menú dulce | Tortas, postres y alfajores | Esmeralda Sweet';
  const description = 'Descubrí el menú dulce de Esmeralda Sweet: tortas, postres, alfajores, masitas, muffins y rolls de canela de pastelería artesanal en Montevideo.';

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/menu-dulce"
        jsonLd={buildWebPageSchema({ title, description, path: '/menu-dulce' })}
      />
      <MenuPage categoria="dulce" titulo="Menú dulce" subtitulo="Pastelería artesanal para regalar, celebrar y compartir." />
    </>
  );
}
