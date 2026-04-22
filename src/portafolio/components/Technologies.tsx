import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  SiIntellijidea,
  SiMongodb,
  SiSpring,
} from '@icons-pack/react-simple-icons';
import { useState } from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGit,
  FaJava,
  FaGithub,
} from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiAndroidstudio,
  SiDbeaver,
  SiExpo,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// eslint-disable-next-line react-refresh/only-export-components
export const technologies = [
  {
    name: 'Java',
    category: 'Backend',
    color: 'bg-orange-700 text-orange',
    icon: <FaJava size={40} />,
  },
  {
    name: 'Spring',
    category: 'Backend',
    color: 'bg-green-600 text-orange',
    icon: <SiSpring size={40} />,
  },
  {
    name: 'React',
    category: 'Frontend',
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    icon: <FaReact size={40} />,
  },
  {
    name: 'Python',
    category: 'Backend',
    color: 'bg-cyan-600',
    icon: <FaPython size={40} />,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300',
    icon: <BiLogoPostgresql size={40} />,
  },
  {
    name: 'MongoDB',
    category: 'Database',
    color: 'bg-green-600/10 text-green-700 dark:text-green-300',
    icon: <SiMongodb size={40} />,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    icon: <FaDocker size={40} />,
  },
  {
    name: 'Git',
    category: 'Tools',
    color: 'bg-orange-600/10 text-orange-700 dark:text-orange-300',
    icon: <FaGit size={40} />,
  },

  {
    name: 'MySQL',
    category: 'Database',
    color: 'bg-cyan-600 text-orange',
    icon: <GrMysql size={40} />,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    icon: <SiTypescript size={40} />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    icon: <SiTailwindcss size={40} />,
  },

  {
    name: 'JavaScript',
    category: 'Frontend',
    color: 'bg-yellow-600 text-orange',
    icon: <IoLogoJavascript size={40} />,
  },
  {
    name: 'Expo',
    category: 'Mobile',
    color: 'bg-black',
    icon: <SiExpo size={40} />,
  },
  {
    name: 'Linux',
    category: 'Tools',
    icon: <FcLinux size={60} />,
  },
  {
    name: 'Postman',
    category: 'Tools',
    color: 'text-orange-600',
    icon: <SiPostman size={40} />,
  },
  {
    name: 'Intellij Idea',
    category: 'Tools',
    color: 'text-gray-500',
    icon: <SiIntellijidea size={40} />,
  },
  {
    name: 'Visual Studio Code',
    category: 'Tools',
    color: 'text-cyan-500',
    icon: <VscVscode size={40} />,
  },
  {
    name: 'GitHub',
    category: 'Tools',
    color: 'text-black',
    icon: <FaGithub size={40} />,
  },
  {
    name: 'Android Studio',
    category: 'Tools',
    color: 'bg-green-800',
    icon: <SiAndroidstudio size={40} />,
  },
  {
    name: 'Dbeaver',
    category: 'Tools',
    color: 'bg-black-800',
    icon: <SiDbeaver size={40} />,
  },
];

export function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categoriasSinRepetido = [
    ...new Set(technologies.map((c) => c.category)),
  ];

  return (
    <section
      id='tecnologias'
      className='py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Tecnologías
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Herramientas y tecnologías con las que eh trabajado.
            </p>
          </div>

          <div className='mb-8 flex flex-wrap justify-center gap-2'>
            {categoriasSinRepetido.map((category) => (
              <Button
                key={category}
                className='hover:bg-gray-800 hover:text-white'
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
            <Button
              className='hover:bg-gray-800 hover:text-white'
              onClick={() => setSelectedCategory('todos')}
            >
              todos
            </Button>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4'>
            {technologies
              .filter((technologie) => {
                if (selectedCategory === 'todos') {
                  return technologie;
                }

                if (technologie.category === selectedCategory) {
                  return technologie;
                }
              })
              .map((tech) => (
                <Card
                  key={tech.name}
                  className='border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer'
                >
                  <CardContent className='p-6 text-center'>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tech.color} mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <span className='font-bold text-lg'>{tech.icon}</span>
                    </div>
                    <h3 className='font-semibold text-foreground mb-1'>
                      {tech.name}
                    </h3>
                    <p className='text-xs text-muted-foreground'>
                      {tech.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
