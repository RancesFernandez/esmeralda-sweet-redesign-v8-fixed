import { imagenes } from "./imagenes";

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
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Torta Merengue",
    precio16: 1200,
    precio22: 1800,
    descripcion:
      "Bizcochuelo de vainilla, relleno de dulce de leche y decorada con merengue italiano flameado.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.tortaMerengue,
  },

  {
    id: 102,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Torta Matilda",
    precio16: 1300,
    precio22: 1900,
    descripcion:
      "Bizcochuelo de chocolate, relleno y decorado con crema bariloche de dulce de leche y chocolate.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.tortaMatilda,
  },

  {
    id: 103,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Brownie",
    precio16: 1200,
    precio22: 1800,
    descripcion:
      "Brownie con nueces u oreos, dulce de leche, merengue italiano y chocolate.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.brownie,
  },

  {
    id: 104,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Cheesecake",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Base de galletas, relleno a base de queso crema y salsa de frutillas, frutos rojos, maracuyá u oreo.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.cheesecake,
  },

  {
    id: 116,
    categoria: "dulce",
    subcategoria: "sin-azucar",
    nombre: "Cheesecake sin azúcar",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Cheesecake artesanal sin azúcar, con base de galletas y una terminación suave y fresca.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.cheesecakeSinAzucar,
  },

  {
    id: 105,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Lemon Pie",
    precio16: 1200,
    precio22: 1800,
    descripcion: "Masa sablé, curd de limón y merengue italiano.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.lemonPie,
  },

  {
    id: 106,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Torta Rogel",
    precio16: 1300,
    precio22: 1900,
    descripcion:
      "Capas de galletas con dulce de leche y merengue italiano flameado.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.rogel,
  },

  {
    id: 107,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Chocotorta",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Base de galletas, relleno a base de queso crema y dulce de leche con galletas de chocolate chocolinas.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.chocotorta,
  },

  {
    id: 108,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Carrot Cake",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Pastel de zanahorias, canela y nueces con relleno y cobertura de frosting de queso.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.carrotCake,
  },

  {
    id: 109,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Red Velvet",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Pastel de terciopelo rojo con relleno y cobertura de frosting de queso.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.redVelvetPersonalizada,
  },

  {
    id: 110,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Tres Mousses",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Postre con tres capas de chocolate blanco, dulce de leche y chocolate semi amargo sobre una base de galletas de chocolate.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.torta,
  },

  {
    id: 111,
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Chajá",
    precio16: 1350,
    precio22: 1950,
    descripcion:
      "Bizcochuelo de vainilla con relleno de crema con frutillas o durazno y cobertura de merengues.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
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
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-y-postres",
    nombre: "Oreo Helada",
    precio16: 1300,
    precio22: 1900,
    descripcion:
      "Postre a base de galletas Oreo, crema, dulce de leche y chocolate semi amargo.",
    porciones16: "8–10 porciones",
    porciones22: "20–22 porciones",
    imagen: imagenes.productos.tortaOreo,
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
    categoria: "dulce",
    subcategoria: "tortas",
    subsubcategoria: "tortas-personalizadas",
    nombre: "Tortas personalizadas",
    descripcion: "Personalizamos tu torta a tu elección.",
    imagen: imagenes.productos.tortaPersonalizada,
    imagenes: [
      imagenes.productos.tortaPersonalizada2,
      imagenes.productos.tortaPersonalizada3,
      imagenes.productos.tortaPersonalizada4,
      imagenes.productos.tortaPersonalizada5,
      imagenes.productos.tortaPersonalizada6,
      imagenes.productos.tortaPersonalizada7,
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
          titulo: "Los bizcochuelos pueden ser:",
          items: ["Vainilla", "Chocolate", "Marmolado"],
        },
        {
          titulo: "Y los rellenos dos entre:",
          items: [
            "Dulce de leche",
            "Crema Bariloche",
            "Ganache de chocolate blanco",
            "Ganache de chocolate semi amargo",
            "Ganache de frutos rojos",
            "Ganache de frutilla",
            "Crema de Oreo",
            "Crema de Nutella",
            "Crema Tramontana",
          ],
        },
      ],

      nota: "Escribinos para ayudarte a encontrar tu torta ideal ✨",
    },
  },

  // ==========================================================
  // OTROS PRODUCTOS QUE YA TENÍAS
  // ==========================================================

  {
    id: 203,
    categoria: "dulce",
    subcategoria: "alfajores",
    nombre: "Alfajores artesanales",
    descripcion:
      "Selección de alfajores artesanales en distintos sabores y coberturas.",
    imagen: imagenes.productos.alfajoresPrincipal,
    imagenes: [
      imagenes.productos.alfajoresPrincipal,
      imagenes.productos.alfajores2,
      imagenes.productos.alfajores3,
      imagenes.productos.alfajores4,
    ],
    detalle: {
      secciones: [
        {
          titulo: "Rellenos:",
          items: [
            "Dulce de leche",
            "Nutella",
            "Kinder",
            "Frutos rojos",
            "Crema bariloche",
            "Maicena",
            "Coco",
            "Chocolate",
            "Chocolate con maní",
            "Maracuyá",
          ],
        },
      ],

      precios: [
        "Box de 6 unidades: $390",
        "Box de 12 unidades: $745",
        "Box de 18 unidades: $1080",
        "Box de 24 unidades: $1390",
      ],
    },
  },

  {
    id: 204,
    categoria: "dulce",
    subcategoria: "muffins",
    nombre: "Muffins",
    descripcion:
      "Muffins artesanales con una presentación delicada y opciones para diferentes ocasiones.",
    imagen: imagenes.productos.muffins,
    imagenes: [imagenes.productos.muffins, imagenes.productos.muffins1],
    detalle: {
      secciones: [
        {
          titulo: "Opciones:",
          items: [
            "Vainilla y merengue",
            "Chocolate con crema bariloche",
            "Red velvet y frosting de queso",
            "Limón, arándanos y merengue",
          ],
        },
      ],

      precios: ["6 unidades: $660", "12 unidades: $1260"],
      nota: "¿Necesitás muffins personalizados o de alguna temática? Consultanos por whatsapp y los creamos",
    },
  },

  {
    id: 205,
    categoria: "dulce",
    subcategoria: "rolls-de-canela",
    nombre: "Rolls de canela",
    descripcion: "Rolls de canela artesanales, suaves y recién preparados.",
    imagen: imagenes.productos.rollsDeCanela,
    imagenes: [
      imagenes.productos.rollsDeCanela,
      imagenes.productos.rollsDeCanela2,
    ],
    detalle: {
      secciones: [
        {
          titulo: "Sabores:",
          items: [
            "Clásico",
            "Frutos rojos",
            "Nutella",
            "Manzana",
            "Oreo",
            "Chocolate",
          ],
        },
      ],

      precios: [
        "Box 4 unidades: $480",
        "Box 6 unidades: $700",
        "Box 12 unidades: $1350",
      ],
    },
  },

  {
    id: 301,
    categoria: "salado",
    subcategoria: "saladitos",
    nombre: "Box de saladitos",
    descripcion: "Información completa al ingresar.",
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
        "-24 unidades $1440",
        "-30 unidades $1800",
        "-40 unidades $2400",
        "-55 unidades $3300",
        "-60 unidades $3600",
        "-100 unidades $5900",
        "-200 unidades $11600",
      ],
      secciones: [
        {
          titulo: "Las opciones de saladitos son:",
          items: [
            "Scones de queso",
            "Scones de queso rellenos",
            "Pan de nuez",
            "Bagels",
            "Pan de pita",
            "Focaccia",
            "Medialunas",
          ],
        },
        {
          titulo: "Los rellenos de los saladitos son:",
          items: [
            "Jamón y queso",
            "Bondiola y rúcula",
            "Bondiola y queso crema",
            "Queso y rúcula",
            "Lomito y queso cheddar",
            "Caprese",
          ],
        },
      ],
      nota: "Por más o menos cantidades podemos armarla personalizada.",
    },
  },

  {
    id: 302,
    categoria: "salado",
    subcategoria: "picadas",
    nombre: "Picadas",
    descripcion: "Información completa al ingresar.",
    imagen: imagenes.productos.picadaPrincipal,
    imagenes: [imagenes.productos.picadaPrincipal, imagenes.productos.picada2],
    detalle: {
      secciones: [
        {
          titulo: "Contiene:",
          items: [
            "Maní",
            "Aceitunas",
            "Pan de molde o pan de nuez",
            "Queso colonia",
            "Queso dambo",
            "Hummus",
            "Jamón",
            "Lomito",
            "Bondiola",
            "Salame",
          ],
        },
      ],

      precios: [
        "Comen 4 y pican 6 vale $2300",
        "Comen 8 y pican 12 vale $4500",
      ],
    },
  },

  {
    id: 303,
    categoria: "dulce",
    subcategoria: "masitas",
    nombre: "Masitas varias",
    precio: 1000,
    descripcion:
      "Surtido de masitas artesanales. Variedades y presentación a consultar.",
    imagen: imagenes.productos.sandwiches1,
    detalle: {
      secciones: [
        {
          titulo: "",
          items: [],
        },
      ],

      precios: [],
      nota: "Próximamente nuevas propuestas",
    },
  },

  {
    id: 401,
    categoria: "desayunos",
    subcategoria: "desayunos-individuales",
    nombre: "Desayuno clásico",
    descripcion: "Una propuesta completa y artesanal para regalar o disfrutar.",
    imagen: imagenes.productos.desayunoClasico,
    imagenes: [
      imagenes.productos.desayunoClasico,
      imagenes.productos.desayunoClasico2,
    ],
    detalle: {
      secciones: [
        {
          titulo: "Contiene:",
          items: [
            "Jugo de naranja o colet",
            "Scones de queso",
            "Scones de queso con bondiola",
            "Porciones de pan de nuez con jamón y queso",
            "Alfajores de chocolate y de maicena",
          ],
        },
      ],

      precios: ["Individual: $880", "Para compartir: $1450"],
    },
  },

  {
    id: 402,
    categoria: "desayunos",
    subcategoria: "desayunos-individuales",
    nombre: "Desayuno mini cake",
    descripcion:
      "Una selección especial acompañada de una mini torta para celebrar.",
    imagen: imagenes.productos.desayunoMiniCake,
    imagenes: [
      imagenes.productos.desayunoMiniCake,
      imagenes.productos.desayunoMiniCake2,
    ],
    detalle: {
      secciones: [
        {
          titulo: "Contiene:",
          items: [
            "Jugo de naranja o colet",
            "Scones de queso",
            "Scones de queso con bondiola y queso crema",
            "Porciones de pan de nuez con jamón y queso",
            "Mini cake a elección",
          ],
        },
      ],

      precios: ["Individual: $1200", "Para compartir: $1650"],
    },
  },

  {
    id: 403,
    categoria: "desayunos",
    subcategoria: "desayunos-para-compartir",
    nombre: "Desayuno saladito",
    descripcion: "Una propuesta variada con opciones saladas para compartir.",
    imagen: imagenes.productos.desayunoSaladito,
    imagenes: [
      imagenes.productos.desayunoSaladito,
      imagenes.productos.desayunoSaladito2,
    ],
    detalle: {
      secciones: [
        {
          titulo: "Contiene:",
          items: [
            "Jugo de naranja o colet",
            "Scones de queso",
            "Scones de queso con bondiola",
            "Porciones de pan de nuez con jamón y queso",
            "Bagels con jamón y queso",
          ],
        },
      ],

      precios: ["Individual: $780", "Para compartir: $1300"],
    },
  },

  {
    id: 404,
    categoria: "desayunos",
    subcategoria: "desayunos-individuales",
    nombre: "Desayuno sin azúcar",
    descripcion:
      "Una alternativa especial para disfrutar de un desayuno artesanal sin azúcar.",
    imagen: imagenes.productos.desayunoSinAzucar,
    detalle: {
      secciones: [
        {
          titulo: "Contiene:",
          items: [
            "Jugo de naranja edulcorado con Stevia",
            "Scones de queso",
            "Bagels rellenos de jamón y queso",
            "Alfajores sin azúcar de maicena y chocolate",
          ],
        },
      ],

      precios: ["Individual: $1050", "Para compartir: $1600"],
    },
  },

  {
    id: 405,
    categoria: "desayunos",
    subcategoria: "desayunos-individuales",
    nombre: "Desayuno con ojitos",
    descripcion: "Una presentación divertida y especial para regalar.",
    imagen: imagenes.productos.desayunoOjitos,
    detalle: {
      secciones: [
        {
          titulo: "Contiene:",
          items: [
            "Jugo de naranja o colet",
            "Scones de queso",
            "Scones de queso con bondiola",
            "Porciones de pan de nuez con jamón y queso",
            "Ojitos de chocolate y vainilla",
            "Alfajores de dulce de leche y chocolate",
          ],
        },
      ],

      precios: ["Individual: $850", "Para compartir: $1400"],
    },
  },
];
