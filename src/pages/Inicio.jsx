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

export default function Inicio() {
  return (
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
  );
}
