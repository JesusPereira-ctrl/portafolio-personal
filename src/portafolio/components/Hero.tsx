import { ArrowDown, Mail, Terminal } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section
      id='inicio'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16'
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20'>
            <Terminal className='h-4 w-4' />
            <span className='text-sm font-medium'>
              Desarrollador Backend Java Spring Boot
            </span>
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance'>
            Construyendo el motor de aplicaciones escalables
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty'>
            Desarrollador Backend especializado en Java y Spring Boot. Diseño
            arquitecturas robustas y APIs eficientes, con la versatilidad de
            React para integrar soluciones Full Stack completas y de alto
            rendimiento.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
            <Button
              size='lg'
              asChild
            >
              <a href='#proyectos'>Ver Proyectos</a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              asChild
            >
              <a href='#contacto'>Contactar</a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              asChild
            >
              <a
                download='../../assets/Jesus-Pereira-Matus CV.pdf.pdf'
                href='#contacto'
              >
                Descargar CV
              </a>
            </Button>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <a
              href='https://github.com/JesusPereira-ctrl'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all'
            >
              <SiGithub className='h-5 w-5' />
            </a>
            <a
              href='https://www.linkedin.com/in/jes%C3%BAs-pereira-matus-50a534359/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all'
            >
              <FaLinkedin className='h-5 w-5' />
            </a>
            <a
              href='mailto:jesuspereirap100@gmail.com'
              className='p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all'
            >
              <Mail className='h-5 w-5' />
            </a>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <a
            href='#sobre-mi'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <ArrowDown className='h-6 w-6 mb-3' />
          </a>
        </div>
      </div>
    </section>
  );
};
