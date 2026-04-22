// import { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  // Send,
  // Github,
  // Linkedin,
  // Twitter,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jesuspereirap100@gmail.com',
    href: 'mailto:jesuspereirap100@gmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+56 9 5069 8031',
    href: 'tel:+56950698031',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Chile, Valdivia',
    href: null,
  },
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
    label: 'YouTube',
  },
];

export const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Simular envío
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   setIsSubmitting(false);
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  //   alert('¡Mensaje enviado correctamente!');
  // };

  return (
    <section
      id='contacto'
      className='py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Contacto
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Siempre estoy abierto a nuevas oportunidades, colaboraciones o
              simplemente a charlar sobre desarrollo. Puedes contactarme
              directamente a través de mis redes o enviarme un correo.
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                {contactInfo.map((item) => (
                  <Card
                    key={item.label}
                    className='border-border hover:border-primary/50 transition-colors'
                  >
                    <CardContent className='p-4 flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0'>
                        <item.icon className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className='font-medium text-foreground hover:text-primary transition-colors'
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='font-medium text-foreground'>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className='pt-6'>
                <h3 className='text-lg font-semibold text-foreground mb-4'>
                  Sígueme en redes
                </h3>
                <div className='flex gap-3'>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all'
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* <Card className='lg:col-span-3 border-border'>
              <CardContent className='p-6 md:p-8'>
                <form
                  onSubmit={handleSubmit}
                  className='space-y-6'
                >
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-foreground'
                      >
                        Nombre
                      </label>
                      <Input
                        id='name'
                        placeholder='Tu nombre'
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium text-foreground'
                      >
                        Email
                      </label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='tu@email.com'
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='subject'
                      className='text-sm font-medium text-foreground'
                    >
                      Asunto
                    </label>
                    <Input
                      id='subject'
                      placeholder='¿En qué puedo ayudarte?'
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm font-medium text-foreground'
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id='message'
                      placeholder='Cuéntame sobre tu proyecto...'
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    type='submit'
                    size='lg'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className='mr-2 h-4 w-4' />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};
