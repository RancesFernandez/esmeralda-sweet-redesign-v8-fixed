// ============================================================
// IMÁGENES DEL SITIO
// ============================================================
// Todas las imágenes visuales del sitio se centralizan acá.
// Cuando tengas las fotos reales, reemplazá cada importación
// por el archivo correspondiente y no tendrás que buscar URLs
// por todo el proyecto.

import hero from '../assets/images/hero/hero.png';
import logo from '../assets/brand/logoEsmeralda.jpg';

import tortaEsmeraldaPremium from '../assets/images/productos/torta-esmeralda-premium.svg';
import macaronsSurtidos from '../assets/images/productos/macarons-surtidos.svg';
import cupcakesRedVelvet from '../assets/images/productos/cupcakes-red-velvet.svg';
import sandwichJamonCrudo from '../assets/images/productos/sandwich-jamon-crudo.svg';
import pizzaRucula from '../assets/images/productos/pizza-rucula.svg';

import evento01 from '../assets/images/galeria/evento-01.svg';
import evento02 from '../assets/images/galeria/evento-02.svg';
import evento03 from '../assets/images/galeria/evento-03.svg';
import evento04 from '../assets/images/galeria/evento-04.svg';
import evento05 from '../assets/images/galeria/evento-05.svg';

import historia from '../assets/images/nosotros/historia.svg';

export const imagenes = {
  logo,
  hero,
  productos: {
    tortaEsmeraldaPremium,
    macaronsSurtidos,
    cupcakesRedVelvet,
    sandwichJamonCrudo,
    pizzaRucula,
  },
  galeria: [evento01, evento02, evento03, evento04, evento05],
  nosotros: {
    historia,
  },
};
