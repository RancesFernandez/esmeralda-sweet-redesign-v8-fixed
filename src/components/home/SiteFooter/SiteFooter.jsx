import { Link } from 'react-router-dom';
import { whatsappUrl } from '../../../data/config';
import './SiteFooter.css';

const INSTAGRAM_URL = 'https://www.instagram.com/esmeralda_sweet_uy?igsh=MWE5YjcxNmVsc3k0eQ==&igsi=MWE5YjcxNmVsc3k0eQ==';
const TIKTOK_URL = 'https://www.tiktok.com/@esmeralda_sweet_uy?_r=1&_t=ZS-98sRSKNJTeO';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container site-footer__grid">
        <div>
          <strong>ESMERALDA SWEET</strong>
          <p>Propuestas artesanales para momentos especiales.</p>
        </div>

        <div>
          <strong>Explorá</strong>
          <Link to="/menu-dulce">Menú dulce</Link>
          <Link to="/menu-salado">Menú salado</Link>
          <Link to="/desayunos">Desayunos</Link>
          <Link to="/#nuestra-historia">Nosotros</Link>
        </div>

        <div>
          <strong>Contacto</strong>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        © {new Date().getFullYear()} Esmeralda Sweet. Todos los derechos reservados.
      </div>
    </footer>
  );
}
