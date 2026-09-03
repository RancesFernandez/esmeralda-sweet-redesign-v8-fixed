export const WHATSAPP_NUMBER = '+598096107503';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappUrl(message = '') {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}
