import { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Award, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Full-Stack Developer', 
      company: 'TechCorp Solutions',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      icon: Code
    },
    {
      year: '2021 - 2023',
      role: 'Frontend Developer',
      company: 'Digital Agency Pro',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      icon: Award
    },
    {
      year: '2020 - 2021',
      role: 'Junior Developer',
      company: 'StartupXYZ',
      description: 'Built modern web interfaces and gained experience in agile development methodologies.',
      icon: Calendar
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-muted/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Passionate developer with a love for creating digital experiences that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile section */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={profilePhoto}
                    alt="Alex Johnson - Full-Stack Developer"
                    className="w-80 h-80 rounded-lg object-cover mx-auto shadow-elegant"
                  />
                </div>
                {/* Decorative background */}
                <div className="absolute -top-4 -right-4 w-80 h-80 bg-gradient-primary rounded-lg opacity-20 -z-10" />
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="h-5 w-5 mr-3 text-primary" />
                  <span>50+ Projects Completed</span>
                </div>
              </div>
            </div>

            {/* Bio and experience */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  web applications that combine beautiful design with robust functionality. 
                  My journey began with a curiosity about how websites work, which evolved into 
                  a deep love for crafting digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or enjoying the great outdoors. I believe in continuous 
                  learning and staying at the forefront of web development trends.
                </p>
              </div>

              {/* Experience timeline */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Experience</h3>
                {experiences.map((exp, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <exp.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="font-semibold text-lg">{exp.role}</h4>
                          <span className="text-sm text-primary font-medium">{exp.year}</span>
                        </div>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;