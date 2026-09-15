import React from 'react';
import MenuPage from '../MenuPage/MenuPage';
import SEO, { buildWebPageSchema } from '../../components/SEO/SEO';
export default function MenuSalado() {
  const title = 'Menú salado | Saladitos y picadas | Esmeralda Sweet';
  const description = 'Conocé las propuestas saladas artesanales de Esmeralda Sweet: saladitos, picadas y opciones para compartir en reuniones, eventos y celebraciones en Montevideo.';

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/menu-salado"
        jsonLd={buildWebPageSchema({ title, description, path: '/menu-salado' })}
      />
      <MenuPage categoria="salado" titulo="Menú salado" subtitulo="Bocados y propuestas saladas pensadas para tus encuentros." />
    </>
  );
}

//Agregar listado de precios, y que en la card se puedan ver varias iamgenes con un botón para cambiar las mismas, que se pueda relaizar lo mismo cuando se entra en la card
// Box de saladitos. Informaicón completa al ingresar.  Dentro de la card esté el listado de precios

//Picadas lo mismo
