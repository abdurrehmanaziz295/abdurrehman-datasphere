
import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Data Scientist', 'AI Engineer', 'Problem Solver', 'Future Innovator'];
  
  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;
    
    const typeText = () => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    };
    
    typeText();
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="section-padding container-width relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-card-gradient border-2 border-primary/30 animate-glow flex items-center justify-center">
            <span className="text-4xl font-bold gradient-text">A</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Hi, I'm <span className="gradient-text">Abdurrehman</span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span>Aspiring </span>
            <span className="ml-2 gradient-text border-r-2 border-primary animate-blink min-w-[200px] text-left">
              {displayText}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up text-balance" style={{ animationDelay: '0.4s' }}>
            A 15-year-old Class 9 student passionate about Data Science, AI, and Cybersecurity. 
            Building the future, one algorithm at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="hero-gradient hover:scale-105 transition-transform">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="glass hover:scale-105 transition-transform">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:animate-glow">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:animate-glow">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:animate-glow">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
