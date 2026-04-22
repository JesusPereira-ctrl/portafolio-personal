import { Code2, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Code2,
    title: 'Código Limpio',
    description:
      'Escribo código legible, mantenible y siguiendo las mejores prácticas de la industria.',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description:
      'Trabajo en equipo de manera efectiva, comunicando ideas de forma clara y constructiva.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description:
      'Siempre aprendiendo nuevas tecnologías y metodologías para mejorar mis habilidades.',
  },
];

export const About = () => {
  return (
    <section
      id='sobre-mi'
      className='py-24 bg-card'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Sobre Mí
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
            <div className='relative'>
              <div className='aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center'>
                <div className='w-full h-full rounded-xl bg-muted flex items-center justify-center overflow-hidden'>
                  <div className='text-center p-8'>
                    <img
                      src='./perfil.jpg'
                      alt='Foto Desarrollador'
                    />
                  </div>
                </div>
              </div>
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl' />
              <div className='absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl' />
            </div>

            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-foreground'>
                ¡Hola! Soy Desarrollador Backend Java
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                Especializado en el ecosistema Java y Spring Boot, me enfoco en
                diseñar arquitecturas robustas, gestión eficiente de bases de
                datos y el desarrollo de APIs escalables que sostienen
                aplicaciones complejas.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Aunque mi fuerte es el lado del servidor, poseo habilidades
                sólidas en React para integrar interfaces dinámicas y
                funcionales, permitiéndome tener una visión clara del flujo
                completo de los datos en el desarrollo Full Stack.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Soy un entusiasta del código limpio y la arquitectura de
                software. Actualmente, dedico mi tiempo a profundizar en
                patrones de diseño y a construir herramientas que resuelvan
                problemas reales mediante tecnología moderna.
              </p>
            </div>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {highlights.map((item) => (
              <Card
                key={item.title}
                className='border-border hover:border-primary/50 transition-colors'
              >
                <CardContent className='p-6 text-center'>
                  <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                    <item.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h4 className='font-semibold text-foreground mb-2'>
                    {item.title}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
