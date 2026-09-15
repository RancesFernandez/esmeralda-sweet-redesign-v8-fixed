import './BannerAnimado.css';

const MENSAJES = [
  '🔥 ¡OFERTAS IMPERDIBLES EN NUESTRO MENÚ DULCE! 🔥',
  '✨ ENCARGOS PARA EVENTOS CON 48HS DE ANTICIPACIÓN ✨',
];

export default function BannerAnimado() {
  return (
    <div className="animated-banner" aria-label="Novedades de Esmeralda Sweet">
      <div className="animated-banner__track">
        {[...MENSAJES, ...MENSAJES].map((mensaje, index) => (
          <span className="animated-banner__message" key={`${mensaje}-${index}`}>
            {mensaje}
          </span>
        ))}
      </div>
    </div>
  );
}
