import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CyberHero = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    },
    glitch: {
      x: [0, -2, 2, 0],
      filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(0deg)'],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-snap-section">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div 
        className="section-padding container-width relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo with Holographic Effect */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 rounded-full glass-card cyberpunk-border relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
              boxShadow: "0 0 40px hsl(var(--neon-cyan) / 0.8)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-transparent to-neon-pink opacity-50"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="w-full h-full flex items-center justify-center relative z-10">
              <span className="text-4xl font-bold gradient-text animate-pulse-neon">A</span>
            </div>
          </motion.div>

          {/* Main Heading with Glitch Effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={glitchVariants}
            whileHover="glitch"
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  '0 0 10px hsl(var(--neon-cyan))',
                  '0 0 20px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-pink))',
                  '0 0 10px hsl(var(--neon-cyan))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hi, I'm{' '}
            </motion.span>
            <motion.span 
              className="gradient-text inline-block"
              animate={{
                filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(270deg)', 'hue-rotate(360deg)']
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Abdurrehman
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle with Matrix Effect */}
          <motion.div 
            className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-foreground/90">Aspiring </span>
            <motion.div
              className="ml-2 relative"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="gradient-text border-r-2 border-neon-cyan min-w-[200px] text-left inline-block"
                animate={{
                  borderColor: ['hsl(var(--neon-cyan))', 'transparent', 'hsl(var(--neon-cyan))']
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {displayText}
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
            variants={itemVariants}
          >
            A <motion.span 
              className="text-neon-cyan font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              15-year-old Class 9 student
            </motion.span> passionate about Data Science, AI, and Cybersecurity. 
            Building the future, one algorithm at a time.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="hero-gradient hover-glow cyberpunk-border relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Download className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="glass-card hover-glow cyberpunk-border relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View Projects</span>
                <ExternalLink className="w-4 h-4 ml-2 relative z-10" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with Real URLs */}
          <motion.div 
            className="flex gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/abdurrehmanaziz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full cyberpunk-border hover-glow group relative"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                boxShadow: "0 0 30px hsl(var(--neon-cyan) / 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 group-hover:text-neon-cyan transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-neon-cyan/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abdurrehman-aziz-684612373"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full cyberpunk-border hover-glow group relative"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                boxShadow: "0 0 30px hsl(var(--neon-blue) / 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 group-hover:text-neon-blue transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-neon-blue/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="mailto:abdurrehmanaziz444@gmail.com"
              className="p-3 glass-card rounded-full cyberpunk-border hover-glow group relative"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                boxShadow: "0 0 30px hsl(var(--neon-pink) / 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 group-hover:text-neon-pink transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-neon-pink/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="p-2 glass-card rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-6 h-6 text-neon-cyan" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CyberHero;