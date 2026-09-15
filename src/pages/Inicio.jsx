import HeroHome from '../components/home/HeroHome/HeroHome';
import InfoStrip from '../components/home/InfoStrip/InfoStrip';
import ProductsSection from '../components/home/ProductsSection/ProductsSection';
import ProcessSection from '../components/home/ProcessSection/ProcessSection';
import Comentarios from '../components/Comentarios/Comentarios';
import StorySection from '../components/home/StorySection/StorySection';
import CotizacionRapida from '../components/CotizacionRapida/CotizacionRapida';
import FaqSection from '../components/home/FaqSection/FaqSection';
import EventCta from '../components/home/EventCta/EventCta';
import SiteFooter from '../components/home/SiteFooter/SiteFooter';
import SEO, { buildBusinessSchema, buildWebPageSchema } from '../components/SEO/SEO';

export default function Inicio() {
  const title = 'Esmeralda Sweet | Pastelería artesanal en Montevideo';
  const description = 'Esmeralda Sweet: pastelería artesanal en Montevideo. Tortas, postres, alfajores, desayunos y propuestas dulces y saladas para regalar, compartir y celebrar.';

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/"
        jsonLd={[buildBusinessSchema(), buildWebPageSchema({ title, description, path: '/' })]}
      />
      <main>
      <HeroHome />
      <InfoStrip />
      <ProductsSection />
      <ProcessSection />
      <Comentarios />
      <StorySection />
      <CotizacionRapida />
      <FaqSection />
      <EventCta />
      <SiteFooter />
      </main>
    </>
  );
}
