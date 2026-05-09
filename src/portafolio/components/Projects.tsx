'use client';

import { useState } from 'react';
import { ExternalLink, Filter, FolderKanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { technologies } from './Technologies';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Music Player App',
    description:
      'Aplicación móvil nativa centrada en la eficiencia del manejo de archivos de audio. Desarrollada con Expo y React Native bajo un entorno de desarrollo en Linux, utilizando TypeScript para asegurar la consistencia de datos.',
    image: '/placeholder-project.jpg',
    technologies: [
      'Expo',
      'Android Studio',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    github: 'https://github.com/JesusPereira-ctrl/music-player-app',
    // demo: 'https://demo.com',
    demo: undefined,
    featured: false,
  },
  {
    id: 2,
    title: 'Product API',
    description:
      'API creada con Spring Boot para poner en practica relaciones con Spring Data JPA y conocimientos del framework spring',
    image: '/placeholder-project.jpg',
    technologies: ['Java', 'Spring', 'PostgreSQL'],
    github: 'https://github.com/JesusPereira-ctrl/products_api',
    // demo: 'https://demo.com',
    demo: undefined,
    featured: false,
  },
];

const allTechnologies = [
  'Todas',
  ...Array.from(
    new Set(
      technologies.filter((t) => t.category !== 'Tools').map((t) => t.name),
    ),
  ),
];

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('Todas');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedTech === 'Todas'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech),
        );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id='proyectos'
      className='py-24 bg-card'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Proyectos
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Selección de proyectos desarrollados de forma personal para
              demostrar mi dominio técnico, desde el diseño de APIs hasta la
              integración de clientes para las interfaces.
            </p>
          </div>

          <div className='mb-8'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <Filter className='h-5 w-5 text-muted-foreground' />
              <span className='text-sm font-medium text-muted-foreground'>
                Filtrar por tecnología:
              </span>
            </div>
            <div className='flex flex-wrap justify-center gap-2'>
              {allTechnologies.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setSelectedTech(tech)}
                  className='rounded-full'
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className='text-center py-16'>
              <FolderKanban className='h-16 w-16 text-muted-foreground mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-foreground mb-2'>
                No hay proyectos con esta tecnología
              </h3>
              <p className='text-muted-foreground'>
                Prueba seleccionando otra tecnología o vuelve a "Todas"
              </p>
            </div>
          ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {displayedProjects.map((project) => (
                <Card
                  key={project.id}
                  className='group overflow-hidden border-border hover:border-primary/50 hover:shadow-xl transition-all'
                >
                  <div className='aspect-video bg-linear-to-br from-primary/20 to-accent/20 relative overflow-hidden'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <FolderKanban className='h-12 w-12 text-primary/50' />
                    </div>
                    {project.featured && (
                      <Badge className='absolute top-3 right-3 bg-primary text-primary-foreground'>
                        Destacado
                      </Badge>
                    )}
                    <div className='absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4'>
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors'
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors'
                        >
                          <ExternalLink className='h-5 w-5' />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardContent className='p-6'>
                    <h3 className='text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-muted-foreground text-sm mb-4 line-clamp-5'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='text-xs'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredProjects.length > 6 && (
            <div className='text-center mt-8'>
              <Button
                variant='outline'
                size='lg'
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Mostrar menos' : 'Ver todos los proyectos'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
