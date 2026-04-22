import {
  Code2,
  // Github,
  // Linkedin,
  // Twitter,
  Mail,
  Heart,
  Coffee,
  Terminal,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    href: 'https://github.com/JesusPereira-ctrl',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/jes%C3%BAs-pereira-matus-50a534359/',
    label: 'LinkedIn',
  },
  {
    icon: <FaYoutube size={20} />,
    href: 'https://www.youtube.com/@jesuspereira4572',
    label: 'Youtube',
  },
  { icon: <Mail />, href: 'mailto:jesuspereirap100@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-foreground text-background'>
      <div className='container mx-auto px-4'>
        <div className='py-16'>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='space-y-6'>
              <a
                href='#inicio'
                className='flex items-center gap-2'
              >
                <Code2 className='h-8 w-8 text-black' />
                <span className='font-bold text-xl'>JesusPereira-ctrl</span>
              </a>
              <p className='text-background/70 leading-relaxed'>
                Desarrollador enfocado en el ecosistema Java/Spring Boot, con la
                versatilidad de React para crear soluciones Full Stack
                integrales. Apasionado por la arquitectura limpia y la
                eficiencia en todo el stack tecnológico."
              </p>
              <div className='flex items-center gap-2 text-sm text-background/70'>
                <Terminal className='h-4 w-4' />
                <code className='font-mono'>
                  {'$ building amazing things_'}
                </code>
              </div>
            </div>

            <div>
              <h3 className='font-semibold text-lg mb-6 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-black'></span>
                Enlaces Rápidos
              </h3>
              <ul className='space-y-3'>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className='text-background/70 hover:text-black transition-colors inline-flex items-center gap-2 group'
                    >
                      <span className='w-0 group-hover:w-2 h-px bg-primary transition-all'></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-lg mb-6 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-primary'></span>
                Conecta Conmigo
              </h3>
              <div className='flex gap-3 mb-6'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 hover:bg-black hover:text-white rounded-lg bg-background/10 transition-all'
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-background/10 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className='flex items-center gap-1 text-sm text-background/70'>
              <span>© {currentYear} JesusPereira-ctrl. Hecho con</span>
              <Heart className='h-4 w-4 text-red-500 fill-red-500' />
              <span>y</span>
              <Coffee className='h-4 w-4 text-amber-500' />
            </div>
            <div className='flex items-center gap-4 text-sm text-background/70'>
              <span className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                Disponible para proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
