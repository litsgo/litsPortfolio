import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Smartphone, Monitor, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import finalBCC from '@/assets/Final BCC 2.png';
import finalBLC from '@/assets/Final BLC.png';
import frontCover from '@/assets/Front Cover Design 2.png';
import frontCover2 from '@/assets/Front Cover Design 3.png';
import frontCover3 from '@/assets/Front Cover Design 4.png';
import connectingDesign from '@/assets/Connecting Design.jpg';
import approvedLogoMART from '@/assets/Approved Logo MART.png';
import coverPage4 from '@/assets/Cover Page 4.png';
import coverPage5 from '@/assets/Cover Page 5.png';
import coverPage6 from '@/assets/Cover Page 6.png';
import coverPage7 from '@/assets/Cover Page 7.png';
import coverPage8 from '@/assets/Cover Page 8.jpg';
import coverPage9 from '@/assets/Cover Page 9.jpg';


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'BUGEMCO Commercial Building Logo',
      //description: 'A modern, fully-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: finalBCC,
      demoUrl: 'https://drive.google.com/file/d/1H2lXut4idAFF4Qri1oCsjKqFAsBLcAZG/view?usp=sharing',
      githubUrl: '#',
    },
    {
      title: 'BUGEMCO MART Logo',
      //description: 'A comprehensive project management tool with real-time collaboration features. Built with React, TypeScript, and Firebase for seamless team productivity.',
      image: approvedLogoMART,
      demoUrl: 'https://drive.google.com/file/d/1Rjqen47FEdMTLsOUnpX5ld1oqaRN9TFc/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'BUGEMCO Learning Center Logo',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: finalBLC,
      demoUrl: 'https://drive.google.com/file/d/1R2NKs9fP-6OvNZHzgXlX-E08h0tihqkq/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Product Catalog Design Cover Page 1',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: frontCover,
      demoUrl: 'https://drive.google.com/file/d/1hz9ijU96pVZCb1OwDWthrThqFaNUw_K8/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Product Catalog Design Cover Page 2',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: frontCover2,
      demoUrl: 'https://drive.google.com/file/d/1xANJT0Fkwd_kzPYHPZCVGixBEalO2U7X/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Product Catalog Design Cover Page 3',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: frontCover3,
      demoUrl: 'https://drive.google.com/file/d/1W53ut-X8zjAsqJaybOftyfFhUxjhUDXi/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Connecting Design',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: connectingDesign,
      demoUrl: 'https://drive.google.com/file/d/1aDpKKm51rlXR84yNs-IHIThhAG_lPCwO/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Sample Cover Page 1',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: coverPage4,
      demoUrl: 'https://drive.google.com/file/d/1ERx1thZGnoOh4mtLEVSK5MXTUuRmkFw_/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Sample Cover Page 2',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: coverPage5,
      demoUrl: 'https://drive.google.com/file/d/1AOS1CED9eZAq5IbQBwvR4t24Ik_0WQ8M/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Sample Cover Page 3',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: coverPage6,
      demoUrl: 'https://drive.google.com/file/d/1Op4KXJpkBPI6lWwBEvHdQSB5iuuy9Uaz/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Sample Cover Page 4',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: coverPage7,
      demoUrl: 'https://drive.google.com/file/d/1T6_MDUxwLjXeJFVSjOJxZjI6PCrgLpOH/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Sample Cover Page 5',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: coverPage8,
      demoUrl: 'https://drive.google.com/file/d/19it-FpfoDgPyHugoqL96TkntZil0g9qG/view?usp=drive_link',
      githubUrl: '#',
    },
    {
      title: 'Sample Cover Page 6',
      //description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: coverPage9,
      demoUrl: 'https://drive.google.com/file/d/1XzSR2-zJ7QOiWjrIPRgS1PBj75VYrcec/view?usp=drive_link',
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
    <section id="projects" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Featured <span className="gradient-text">Projects</span> and <span className="gradient-text">Logos</span> 
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              These are some of my works showcasing my skills in Graphic Design. I am a fan of typography, color theory, and visual storytelling.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary-hover text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Logo
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

                {/* Project content */}
                <div className="p-10">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  {/*<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>*/}
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View more projects button */}
          {/*<div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              
              View More on GitHub
            </Button>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Projects;