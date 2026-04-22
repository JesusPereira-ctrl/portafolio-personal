import { About } from './portafolio/components/About';
import { Contact } from './portafolio/components/Contact';
import { Footer } from './portafolio/components/Footer';
import { Hero } from './portafolio/components/Hero';
import { Header } from './portafolio/components/Navbar';
import { Projects } from './portafolio/components/Projects';
import { Technologies } from './portafolio/components/Technologies';

export const Portafolio = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
