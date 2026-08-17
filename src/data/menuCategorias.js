export const menuCategorias = {
  dulce: {
    id: 'dulce',
    nombre: 'Menú dulce',
    descripcion: 'Pastelería artesanal para regalar, celebrar y compartir.',
    imagen: null,
    opciones: [
      {
        id: 'tortas',
        nombre: 'Postres y tortas',
        descripcion: 'Tortas, postres y propuestas especiales para cada ocasión.',
        imagenKey: 'tortaEsmeraldaPremium',
      },
      { id: 'masitas', nombre: 'Masitas', descripcion: 'Pequeños bocados dulces para compartir.', imagenKey: 'macaronsSurtidos' },
      { id: 'alfajores', nombre: 'Alfajores', descripcion: 'Rellenos artesanales para regalar o disfrutar.', imagenKey: 'macaronsSurtidos' },
      { id: 'muffins', nombre: 'Muffins', descripcion: 'Suaves, caseros y perfectos para cualquier momento.', imagenKey: 'cupcakesRedVelvet' },
      { id: 'rolls-de-canela', nombre: 'Rolls de canela', descripcion: 'Rolls tiernos, aromáticos y recién horneados.', imagenKey: 'tortaEsmeraldaPremium' },
    ],
  },
  salado: {
    id: 'salado',
    nombre: 'Menú salado',
    descripcion: 'Bocados y propuestas saladas pensadas para tus encuentros.',
    imagen: null,
    opciones: [
      { id: 'saladitos', nombre: 'Saladitos', descripcion: 'Bocados salados ideales para picar y compartir.', imagenKey: 'sandwichJamonCrudo' },
      { id: 'picadas', nombre: 'Picadas', descripcion: 'Combinaciones para llevar directo a la mesa.', imagenKey: 'pizzaRucula' },
    ],
  },
  desayunos: {
    id: 'desayunos',
    nombre: 'Desayunos',
    descripcion: 'Opciones individuales y para compartir para empezar el día con algo rico.',
    imagen: null,
    opciones: [
      {
        id: 'desayunos-individuales',
        nombre: 'Desayunos individuales',
        descripcion: 'Una propuesta completa para disfrutar de forma individual.',
        imagenKey: 'cupcakesRedVelvet',
      },
      {
        id: 'desayunos-para-compartir',
        nombre: 'Desayunos para compartir',
        descripcion: 'Opciones abundantes para compartir en pareja, familia o con amigos.',
        imagenKey: 'sandwichJamonCrudo',
      },
    ],
  },

};

export function getCategoria(categoria) {
  return menuCategorias[categoria];
}

export function getOpcion(categoria, opcion) {
  return menuCategorias[categoria]?.opciones.find((item) => item.id === opcion);
}
