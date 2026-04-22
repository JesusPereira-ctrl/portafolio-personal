import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, [isDark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <a
            href='#inicio'
            className='flex items-center gap-2 text-foreground'
          >
            <Code2 className='h-8 w-8 text-primary' />
            <span className='font-bold text-xl'>JesusPereira-ctrl</span>
          </a>

          <nav className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-muted-foreground hover:text-primary transition-colors font-medium'
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-2 md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-lg border-b border-border shadow-xl z-[60]'
          >
            <nav className='container mx-auto px-4 py-6 flex flex-col gap-4'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-lg text-muted-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50 last:border-0'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
