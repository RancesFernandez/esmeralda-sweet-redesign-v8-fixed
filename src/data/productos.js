import { imagenes } from './imagenes';

// ============================================================
// CATÁLOGO
// ============================================================

export const productos = [

  // ==========================================================
  // MENÚ DULCE
  // TORTAS Y POSTRES
  // ==========================================================

  {
    id: 101,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Torta Merengue',
    precio16: 1200,
    precio22: 1800,
    descripcion:
      'Bizcochuelo de vainilla, relleno de dulce de leche y decorada con merengue italiano flameado.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.chaja,
  },

  {
    id: 102,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Torta Matilda',
    precio16: 1300,
    precio22: 1900,
    descripcion:
      'Bizcochuelo de chocolate, relleno y decorado con crema bariloche de dulce de leche y chocolate.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.choco,
  },

  {
    id: 103,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Brownie',
    precio16: 1200,
    precio22: 1800,
    descripcion:
      'Brownie con nueces u oreos, dulce de leche, merengue italiano y chocolate.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.brownie,
  },

  {
    id: 104,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Cheesecake',
    precio16: 1350,
    precio22: 1950,
    descripcion:
      'Base de galletas, relleno a base de queso crema y salsa de frutillas, frutos rojos, maracuyá u oreo.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.cheesecake,
  },

  {
    id: 105,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Lemon Pie',
    precio16: 1200,
    precio22: 1800,
    descripcion:
      'Masa sablé, curd de limón y merengue italiano.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.lemonPie,
  },

  {
    id: 106,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Torta Rogel',
    precio16: 1300,
    precio22: 1900,
    descripcion:
      'Capas de galletas con dulce de leche y merengue italiano flameado.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.rogel,
  },

  {
    id: 107,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Chocotorta',
    precio16: 1350,
    precio22: 1950,
    descripcion:
      'Base de galletas, relleno a base de queso crema y dulce de leche con galletas de chocolate chocolinas.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.chocotorta,
  },

  {
    id: 108,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Carrot Cake',
    precio16: 1350,
    precio22: 1950,
    descripcion:
      'Pastel de zanahorias, canela y nueces con relleno y cobertura de frosting de queso.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.torta,
  },

  {
    id: 109,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Red Velvet',
    precio16: 1350,
    precio22: 1950,
    descripcion:
      'Pastel de terciopelo rojo con relleno y cobertura de frosting de queso.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.redVelvetPersonalizada,
  },

  {
    id: 110,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Tres Mousses',
    precio16: 1350,
    precio22: 1950,
    descripcion:
      'Postre con tres capas de chocolate blanco, dulce de leche y chocolate semi amargo sobre una base de galletas de chocolate.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.torta,
  },

  {
    id: 111,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Chajá',
    precio16: 1350,
    precio22: 1950,
    descripcion:
      'Bizcochuelo de vainilla con relleno de crema con frutillas o durazno y cobertura de merengues.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.chaja,
  },

  // {
  //   id: 112,
  //   categoria: 'dulce',
  //   subcategoria: 'tortas',
  //   subsubcategoria: 'tortas-y-postres',
  //   nombre: 'New York Cheesecake',
  //   precio16: 1350,
  //   precio22: 1950,
  //   descripcion:
  //     'Base de galletas, relleno a base de queso crema, chantilly y salsa de frutillas, frutos rojos o maracuyá.',
  //   porciones16: '8–10 porciones',
  //   porciones22: '20–22 porciones',
  //   imagen: imagenes.productos.cheesecake,
  // },

  {
    id: 113,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Oreo Helada',
    precio16: 1300,
    precio22: 1900,
    descripcion:
      'Postre a base de galletas Oreo, crema, dulce de leche y chocolate semi amargo.',
    porciones16: '8–10 porciones',
    porciones22: '20–22 porciones',
    imagen: imagenes.productos.chocotorta,
  },

  // {
  //  id: 114,
  //  categoria: 'dulce',
  // subcategoria: 'tortas',
  //  subsubcategoria: 'tortas-y-postres',
  // nombre: 'Torta Menta',
  // precio16: 1300,
  // precio22: 1900,
  // descripcion:
  //   'Base de chocolate semi amargo, mousse de menta y crema chantilly.',
  // porciones16: '8–10 porciones',
  // porciones22: '20–22 porciones',
  // imagen: imagenes.productos.choco,
  // },

  // {
  //  id: 115,
  // categoria: 'dulce',
  //  subcategoria: 'tortas',
  // subsubcategoria: 'tortas-y-postres',
  //  nombre: 'Choco y Maracuyá',
  //  precio16: 1350,
  //  precio22: 1950,
  // descripcion:
  //   'Base de galletas de chocolate, mousse de chocolate y maracuyá con ganache de chocolate semi amargo.',
  //  porciones16: '8–10 porciones',
  // porciones22: '20–22 porciones',
  //  imagen: imagenes.productos.choco,
  // },

  {
    id: 150,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-personalizadas',
    nombre: 'Tortas personalizadas',
    descripcion: 'Personalizamos tu torta a tu elección.',
    imagen: imagenes.productos.tortaPersonalizada,
    imagenes: [
      imagenes.productos.tortaPersonalizada,
      imagenes.productos.Personalizada2,
      imagenes.productos.personalizada3,
      imagenes.productos.personalizada4,
      imagenes.productos.personalizada5,
      imagenes.productos.personalizada6,
      imagenes.productos.personalizada7,
      imagenes.productos.personalizada8,
    ],
    detalle: {
      secciones: [
        {
          titulo: 'Los bizcochuelos pueden ser:',
          items: [
            'Vainilla',
            'Chocolate',
            'Marmolado',
          ],
        },
        {
          titulo: 'Y los rellenos dos entre:',
          items: [
            'Dulce de leche',
            'Crema Bariloche',
            'Ganache de chocolate blanco',
            'Ganache de chocolate semi amargo',
            'Ganache de frutos rojos',
            'Ganache de frutilla',
            'Crema de Oreo',
            'Crema de Nutella',
            'Crema Tramontana',
          ],
        },
      ],
    },
  },


  // ==========================================================
  // OTROS PRODUCTOS QUE YA TENÍAS
  // ==========================================================

  {
    id: 201,
    categoria: 'dulce',
    subcategoria: 'alfajores',
    nombre: 'Macarons Surtidos',
    precio: 1200,
    descripcion:
      'Caja de 6 unidades de macarons franceses con rellenos sutiles de frambuesa, chocolate amargo y pistacho.',
    imagen: imagenes.productos.choco,
  },

  {
    id: 202,
    categoria: 'dulce',
    subcategoria: 'muffins',
    nombre: 'Cupcakes de Red Velvet',
    precio: 1800,
    descripcion:
      'Suaves cupcakes de red velvet coronados con frosting de queso crema y detalles decorativos.',
    imagen: imagenes.productos.chocotorta,
  },

  {
    id: 301,
    categoria: 'salado',
    subcategoria: 'saladitos',
    nombre: 'Box de saladitos',
    descripcion: 'Información completa al ingresar.',
    imagen: imagenes.productos.sandwiches,
    imagenes: [
      imagenes.productos.sandwiches,
      imagenes.productos.sandwiches1,
      imagenes.productos.sandwiches2,
      imagenes.productos.sandwiches3,
      imagenes.productos.sandwiches4,
      imagenes.productos.sandwiches5,
    ],
    detalle: {
      precios: [
        '-24 unidades $1440',
        '-30 unidades $1800',
        '-40 unidades $2400',
        '-55 unidades $3300',
        '-60 unidades $3600',
        '-100 unidades $5900',
        '-200 unidades $11600',
      ],
      secciones: [
        {
          titulo: 'Las opciones de saladitos son:',
          items: [
            'Scones de queso',
            'Scones de queso rellenos',
            'Pan de nuez',
            'Bagels',
            'Pan de pita',
            'Focaccia',
            'Medialunas',
          ],
        },
        {
          titulo: 'Los rellenos de los saladitos son:',
          items: [
            'Jamón y queso',
            'Bondiola y rúcula',
            'Bondiola y queso crema',
            'Queso y rúcula',
            'Lomito y queso cheddar',
            'Caprese',
          ],
        },
      ],
      nota: 'Por más o menos cantidades podemos armarla personalizada.',
    },
  },

  {
    id: 302,
    categoria: 'salado',
    subcategoria: 'picadas',
    nombre: 'Picadas',
    descripcion: 'Información completa al ingresar.',
    imagen: imagenes.productos.sandwiches1,
    imagenes: [
      imagenes.productos.sandwiches1,
      imagenes.productos.sandwiches2,
      imagenes.productos.sandwiches3,
      imagenes.productos.sandwiches6,
    ],
    detalle: {
      precios: [
        'Picada pan de pita 20 unidades',
        'Picada aceitunas 40 unidades',
      ],
    },
  },

  {
    id: 303,
    categoria: 'dulce',
    subcategoria: 'masitas',
    nombre: 'Masitas varias',
    precio: 1000,
    descripcion:
      'Surtido de masitas artesanales. Variedades y presentación a consultar.',
    imagen: imagenes.productos.sandwiches1,
  },

  {
    id: 401,
    categoria: 'desayunos',
    subcategoria: 'desayunos-individuales',
    nombre: 'Desayuno individual',
    descripcion: 'Una propuesta completa para disfrutar algo rico y especial.',
    imagen: imagenes.productos.desayunoIndividual,
    imagenes: [
      imagenes.productos.desayunoIndividual,
      imagenes.productos.desayunoIndividual1,
      imagenes.productos.desayunoIndividual2,
    ],
  },

  {
    id: 402,
    categoria: 'desayunos',
    subcategoria: 'desayunos-individuales',
    nombre: 'Desayuno individual especial',
    descripcion: 'Una selección artesanal preparada para regalar o disfrutar.',
    imagen: imagenes.productos.desayunoIndividual2,
    imagenes: [
      imagenes.productos.desayunoIndividual2,
      imagenes.productos.desayunoIndividual3,
    ],
  },

  {
    id: 403,
    categoria: 'desayunos',
    subcategoria: 'desayunos-para-compartir',
    nombre: 'Desayuno para compartir',
    descripcion: 'Una propuesta abundante para disfrutar en compañía.',
    imagen: imagenes.productos.desayunoCompartido,
    imagenes: [
      imagenes.productos.desayunoCompartido,
      imagenes.productos.desayunoCompartido1,
      imagenes.productos.desayunoCompartido2,
    ],
  },

  {
    id: 404,
    categoria: 'desayunos',
    subcategoria: 'desayunos-para-compartir',
    nombre: 'Desayuno para compartir especial',
    descripcion: 'Una selección pensada para compartir momentos especiales.',
    imagen: imagenes.productos.desayunoCompartido1,
    imagenes: [
      imagenes.productos.desayunoCompartido1,
      imagenes.productos.desayunoCompartido2,
    ],
  },

];

