
import { Code, Target, Zap, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Early Starter",
      description: "Started coding at 13, diving deep into data science fundamentals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on becoming an AI Engineer and Cybersecurity Expert"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Rapidly mastering Python, ML algorithms, and data analysis"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Balance",
      description: "Excelling in Class 9 while pursuing advanced tech skills"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            Passionate about transforming data into insights and building intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At just 15 years old, I've already fallen in love with the world of data science and artificial intelligence. 
                  What started as curiosity about how machines can learn has evolved into a serious pursuit of becoming an AI Engineer.
                </p>
                <p>
                  Balancing my Class 9 studies with intensive self-learning in Python, machine learning, and cybersecurity, 
                  I believe that starting early gives me a unique advantage in understanding complex concepts deeply.
                </p>
                <p>
                  My goal is to contribute to breakthrough AI research while building secure, intelligent systems that can 
                  make a real difference in the world. Every project I work on is a step toward that future.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {highlights.map((item, index) => (
              <Card key={index} className="glass border-border/50 hover:scale-105 transition-transform duration-300 hover:animate-glow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">My Vision</h3>
            <p className="text-lg text-muted-foreground text-balance">
              "To become a leading AI Engineer who bridges the gap between cutting-edge research and practical applications, 
              while ensuring the security and ethical use of artificial intelligence for the betterment of society."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
