import { imagenes } from './imagenes';

// ============================================================
// CATÁLOGO
// ============================================================
// Para cambiar una foto, hacelo en src/data/imagenes.js.
// Los productos solo referencian la imagen que corresponde.

export const productos = [
  {
    id: 1,
    categoria: 'dulce',
    subcategoria: 'tortas',
    subsubcategoria: 'tortas-y-postres',
    nombre: 'Torta Esmeralda Premium',
    precio: 4500,
    descripcion: 'Bizcochuelo húmedo de vainilla, relleno de doble capa de dulce de leche artesanal y cobertura de crema chantilly.',
    imagen: imagenes.productos.tortaEsmeraldaPremium,
  },
  {
    id: 2,
    categoria: 'dulce',
    subcategoria: 'alfajores',
    nombre: 'Macarons Surtidos',
    precio: 1200,
    descripcion: 'Caja de 6 unidades de macarons franceses con rellenos sutiles de frambuesa, chocolate amargo y pistacho.',
    imagen: imagenes.productos.macaronsSurtidos,
  },
  {
    id: 3,
    categoria: 'dulce',
    subcategoria: 'muffins',
    nombre: 'Cupcakes de Red Velvet',
    precio: 1800,
    descripcion: 'Suaves cupcakes de red velvet coronados con un delicado frosting de queso crema y detalles decorativos.',
    imagen: imagenes.productos.cupcakesRedVelvet,
  },
  {
    id: 4,
    categoria: 'salado',
    subcategoria: 'saladitos',
    nombre: 'Sandwich Gourmet de Jamón Crudo',
    precio: 3200,
    descripcion: 'Pan de masamadre crujiente, finas fetas de jamón crudo premium, rúcula fresca y un toque de aceite de oliva texturizado.',
    imagen: imagenes.productos.sandwichJamonCrudo,
  },
  {
    id: 5,
    categoria: 'salado',
    subcategoria: 'picadas',
    nombre: 'Pizza Artesanal de Rúcula',
    precio: 4100,
    descripcion: 'Masa de larga fermentación, salsa de tomate natural, mozzarella fundida, rúcula fresca y lascas de queso parmesano.',
    imagen: imagenes.productos.pizzaRucula,
  },
];
