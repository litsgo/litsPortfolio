import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import fb1 from '@/assets/fb1.png';
import fb2 from '@/assets/fb2.png';
import fb3 from '@/assets/fb3.png';
import fb4 from '@/assets/fb4.png';
import fb5 from '@/assets/fb5.png';
import fb6 from '@/assets/fb6.png';
import fb7 from '@/assets/fb7.png';
import fb8 from '@/assets/fb8.png';
import fb9 from '@/assets/fb9.png';
import fb10 from '@/assets/fb10.jpg';
import fb11 from '@/assets/fb11.jpg';
import fb12 from '@/assets/fb12.png';

const FacebookPubmats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const pubmats = [
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb1,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb2,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb3,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb4,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb5,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb6,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb7,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb8,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb9,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb10,
      demoUrl: 'https://drive.google.com/file/d/1YMxSAcLw-518Ou0eDUH4pwSfJ-h3_IaM/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb11,
      demoUrl: 'https://drive.google.com/file/d/1AfZAylRhNt_B3LVJkAyVIm-O__lAMJp7/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Facebook Pubmat Design',
      description: 'A polished Facebook promotional graphic designed for brand awareness and engagement.',
      image: fb12,
      demoUrl: 'https://drive.google.com/file/d/19aepdTPPLwSPqohs_AhxB0ozDtl4Og9n/view?usp=drive_link',
      githubUrl: '#',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="facebook-pubmats" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Featured <span className="gradient-text">Facebook</span> Pubmats
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              A curated selection of Facebook ad designs and marketing materials showcasing visual storytelling and campaign-ready layout work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pubmats.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-hover text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/90 hover:bg-background"
                        asChild
                      >
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookPubmats;
