import { imagenes } from './imagenes';

export const menuCategorias = {
  dulce: {
    id: 'dulce',
    nombre: 'Menú dulce',
    descripcion: 'Pastelería artesanal para regalar, celebrar y compartir.',
    imagen: imagenes.choco
    ,
    opciones: [
      {
        id: 'tortas',
        nombre: 'Postres y tortas',
        imagenKey: 'peñarol',
      },
      { id: 'masitas', nombre: 'Masitas', imagenKey: 'chaja' },
      { id: 'alfajores', nombre: 'Alfajores', imagenKey: 'cheesecake' },
      { id: 'muffins', nombre: 'Muffins', imagenKey: 'choco' },
      { id: 'rolls-de-canela', nombre: 'Rolls de canela', imagenKey: 'peñarol' },
    ],
  },
  salado: {
    id: 'salado',
    nombre: 'Menú salado',
    descripcion: 'Bocados y propuestas saladas pensadas para tus encuentros.',
    imagen: null,
    opciones: [
      { id: 'saladitos', nombre: 'Saladitos', descripcion: 'Bocados salados ideales para picar y compartir.', imagenKey: 'sandwiches' },
      { id: 'picadas', nombre: 'Picadas', descripcion: 'Combinaciones para llevar directo a la mesa.', imagenKey: 'sandwiches6' },
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
        imagenKey: 'desayunoIndividual1',
      },
      {
        id: 'desayunos-para-compartir',
        nombre: 'Desayunos para compartir',
        descripcion: 'Opciones abundantes para compartir en pareja, familia o con amigos.',
        imagenKey: 'desayunoCompartido',
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
