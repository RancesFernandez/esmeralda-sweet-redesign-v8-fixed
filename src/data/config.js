export const WHATSAPP_NUMBER = '+598099123926';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const MSG_PEDIDO_GENERAL = `Hola Esmeralda Sweet 😊

Quisiera hacer una consulta para realizar un pedido.

Me gustaría conocer las opciones disponibles y recibir asesoramiento para elegir la propuesta que mejor se adapte a lo que necesito.

¡Gracias! 💚`;

export const MSG_EVENTO = `Hola Esmeralda Sweet 😊

Estoy organizando un evento y me gustaría consultar por una propuesta.

Quisiera contarles algunos detalles para que puedan orientarme con las opciones disponibles y, si es posible, preparar una propuesta acorde a lo que estoy buscando.

¡Gracias! 💚`;

export function whatsappUrl(message = '') {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

