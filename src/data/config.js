export const WHATSAPP_NUMBER = '099123926';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappUrl(message = '') {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}
