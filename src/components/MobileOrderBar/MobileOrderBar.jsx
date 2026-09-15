import { whatsappUrl, MSG_PEDIDO_GENERAL } from '../../data/config';
import './MobileOrderBar.css';

export default function MobileOrderBar() {
  return (
    <div className="mobile-order-bar">
      <a
        href={whatsappUrl(MSG_PEDIDO_GENERAL)}
        target="_blank"
        rel="noreferrer"
      >
        Hacer pedido por WhatsApp ↗
      </a>
    </div>
  );
}
