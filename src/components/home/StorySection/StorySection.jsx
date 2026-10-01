import { imagenes } from "../../../data/imagenes";
import "./StorySection.css";

export default function StorySection() {
  return (
    <section id="nuestra-historia" className="story-section section">
      <div className="section-container story-grid">
        <div className="story-image">
          <img
            src={imagenes.nosotros.nosotros}
            alt="Trabajo artesanal de Esmeralda Sweet"
            loading="lazy"
          />
        </div>

        <div className="story-copy">
          <p className="section-kicker">Nuestra historia</p>
          
          <p>
            Hay cosas que comienzan sin grandes planes y terminan convirtiéndose
            en parte de quienes somos. En 2022, surge la idea de emprender lo que empezó de una manera
            sencilla: preparando tortas y cosas dulces para mi familia en momentos especiales, por el
            simple placer de crear algo rico con mis propias manos y compartirlo
            con quienes más quiero. Lo que comenzó como un hobby fue creciendo
            poco a poco, hasta convertirse en una verdadera vocación.{" "}
          </p>
          <p>
            Desde aquella primera cocina en casa, entre recetas, aprendizajes y
            muchas horas de dedicación, nació el deseo de seguir creando y de
            llevar un pedacito de ese cariño a más personas. Con el tiempo, el
            proyecto creció y llegó el momento de dar un nuevo paso: la cocina
            de casa quedó atrás para dar lugar a mi propio taller en el Centro,
            un espacio donde cada preparación comenzó a reflejar aún más mi
            manera de entender la pastelería: artesanal, cuidada y hecha con
            dedicación.
          </p>
          <p>
            {" "}
            En 2025, llegó una nueva etapa. La posibilidad de profesionalizar
            este camino me llevó a estudiar en ITHU, una experiencia que me
            permitió seguir aprendiendo, perfeccionar mi oficio y darle nuevas
            herramientas a una pasión que ya se había convertido en parte de mi
            vida. Y, poco a poco, comenzaron a llegar nuevas personas. Clientes
            que confiaron en mi trabajo, que volvieron a elegirme y que me
            fueron teniendo presente para acompañarlos en momentos y
            celebraciones especiales. Cada nuevo pedido fue también una
            oportunidad para seguir creciendo, aprender algo nuevo y, sobre
            todo, descubrir que aquello que había comenzado en la cocina de mi
            casa podía llegar mucho más lejos.{" "}
          </p>
          <p>
            {" "}
            Y quizás ahí entendí que esto siempre fue mucho más que preparar una
            torta, una picada o un box de saladitos. Es crear algo que acompaña un momento, una celebración, un
            encuentro. Es poner dedicación en cada detalle para que, cuando
            llegue a la mesa, pueda provocar algo tan sencillo y tan especial
            como una sonrisa. Porque detrás de cada pedido hay una historia, una
            persona y un motivo para celebrar. Y esa es, desde el comienzo, la
            esencia de
          </p>
          <p className="section-kicker">Esmeralda Sweet: </p>
          <h3 className="section-kicker">Algo rico para alegrar el corazón.</h3>
        </div>
      </div>
    </section>
  );
}
