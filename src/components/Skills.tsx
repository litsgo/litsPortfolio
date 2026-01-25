import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Globe,
  Settings,
  Users,
  Camera
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Graphic Design',
      icon: Palette,
      skills: [
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Affinity by Canva', level: 70 },
        { name: 'Adobe Illustrator', level: 60 },
        { name: 'Adobe Indesign', level: 60 },
        { name: 'Adobe After Efefcts', level: 50 },
        { name: 'Adobe Lightroom', level: 60 },
      ]
    },
    {
      title: 'Video Production',
      icon: Camera,
      skills: [
        { name: 'Adobe Premiere Pro', level: 80 },
        { name: 'Davinci Resolve', level: 70 }
      ]
    }
  ];

  const toolsAndTechnologies = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe InDesign', 'Adobe Lightroom', 'Adobe Premiere',
    'Davinci Resolve', 'Affinity by Canva', 'OBS', 'HTML', 'CSS', 'Javascript', 'React JS'
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Settings },
    { name: 'Team Leadership', icon: Users },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Project Management', icon: Globe }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay progress bar animation for visual effect
          setTimeout(() => setAnimateProgress(true), 500);
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
    <section id="skills" ref={sectionRef} className="bg-muted/30">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              A comprehensive overview of my technical skills and professional competencies.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`p-6 card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="progress-bar h-2">
                        <div 
                          className="progress-fill h-full"
                          style={{
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${800 + index * 150 + skillIndex * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-semibold mb-8 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {toolsAndTechnologies.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 text-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default ${animateProgress ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${1000 + index * 50}ms` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-semibold mb-8 text-center">Professional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <Card 
                  key={index}
                  className={`p-6 text-center card-hover transition-all duration-1000 ${animateProgress ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${1200 + index * 100}ms` }}
                >
                  <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm">{skill.name}</h4>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;