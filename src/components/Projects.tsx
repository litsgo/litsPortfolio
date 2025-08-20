import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Smartphone, Monitor, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import dashboardImg from '@/assets/project-dashboard.jpg';
import mobileImg from '@/assets/project-mobile.jpg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, fully-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: ecommerceImg,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'Web Application',
      icon: Globe
    },
    {
      title: 'Task Management Dashboard',
      description: 'A comprehensive project management tool with real-time collaboration features. Built with React, TypeScript, and Firebase for seamless team productivity.',
      image: dashboardImg,
      tags: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'Dashboard',
      icon: Monitor
    },
    {
      title: 'Weather Mobile App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with React Native and weather APIs.',
      image: mobileImg,
      tags: ['React Native', 'APIs', 'Geolocation', 'Animations'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'Mobile App',
      icon: Smartphone
    }
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              A showcase of my recent work, featuring web applications, mobile apps, and creative digital solutions.
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
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project type badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      <project.icon className="h-3 w-3 mr-1" />
                      {project.type}
                    </Badge>
                  </div>

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
                          Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-background/90 hover:bg-background"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View more projects button */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;