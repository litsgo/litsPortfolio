import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="section-container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building digital experiences that combine beautiful design with robust functionality. 
                Let's create something amazing together.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                <span>using React & TypeScript</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Let's Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>San Francisco, CA</p>
                <a 
                  href="mailto:alex.johnson@email.com" 
                  className="hover:text-primary transition-colors duration-200 block"
                >
                  alex.johnson@email.com
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-primary transition-colors duration-200 block"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Alex Johnson. All rights reserved.
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-sm text-muted-foreground">
                  Built with modern web technologies
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToTop}
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;