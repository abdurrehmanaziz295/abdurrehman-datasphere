
import Navigation from '@/components/Navigation';
import CyberHero from '@/components/CyberHero';
import ParticleBackground from '@/components/ParticleBackground';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <main>
        <CyberHero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
