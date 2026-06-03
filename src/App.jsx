import { useScrollSpy } from './hooks/useScrollSpy';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Packages from './components/sections/Packages';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import CTABanner from './components/sections/CTABanner';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const SECTION_IDS = ['home', 'about', 'packages', 'gallery', 'enquiry', 'faq', 'contact'];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <div className="max-w-full overflow-x-hidden font-poppins antialiased">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Packages />
        <Stats />
        <CTABanner />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
