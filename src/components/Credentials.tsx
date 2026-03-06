import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import Badge1 from '@/assets/Badge1.png';
import Badge2 from '@/assets/Badge2.png';
import Badge3 from '@/assets/Badge3.png';
import Badge4 from '@/assets/Badge4.png';


const Credentials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const credsyBadges = [
    {
      title: 'AI Fundamentals with IBM SkillsBuild',
      issuer: 'Cisco',
      date: 'August 17, 2025',
      image: Badge1,
      url: 'https://www.credly.com/badges/30dc3a36-7167-46ab-80c4-8ca04e8a48d1'
    },
    {
      title: 'AI Fundamentals',
      issuer: 'IBM',
      date: 'August 17, 2025',
      image: Badge2,
      url: 'https://www.credly.com/badges/79018036-4952-45e2-9e06-83059e09e71e/public_url'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: 'May 28, 2025',
      image: Badge3,
      url: 'https://www.credly.com/badges/18c19741-0f4d-4054-8b24-e72148ec557a/public_url'
    },
    {
      title: 'Operating Systems Basics',
      issuer: 'Cisco',
      date: 'September 7, 2025',
      image: Badge4,
      url: 'https://www.credly.com/badges/78322fde-8a08-44f7-8eb9-d49e2df251c2/public_url'
    },
    // Add more badges here
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
    <section id="credentials" ref={sectionRef} className="bg-background">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Credentials
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Professional achievements, certifications, and verified credentials from industry leaders.
            </p>
          </div>

          {/* Credly Badges Section */}
          {credsyBadges.length > 0 && (
            <div className="mb-20">
              <div className={`flex items-center justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Award className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl md:text-3xl font-semibold">Credly Badges</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {credsyBadges.map((badge, index) => (
                  <a
                    key={index}
                    href={badge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <Card className="h-full p-6 card-hover flex flex-col items-center text-center">
                      <img 
                        src={badge.image} 
                        alt={badge.title}
                        className="h-40 w-40 object-cover rounded-lg mb-4"
                      />
                      <h4 className="font-semibold text-lg mb-2">{badge.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{badge.issuer}</p>
                      <Badge variant="secondary" className="mt-auto">
                        {badge.date}
                      </Badge>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
