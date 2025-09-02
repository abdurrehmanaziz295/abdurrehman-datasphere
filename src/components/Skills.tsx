
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Python, Database, Brain, Shield, GitBranch, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Python className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 75 },
        { name: "JavaScript", level: 60 },
        { name: "R", level: 55 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Pandas & NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 70 },
        { name: "Matplotlib & Seaborn", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Jupyter Notebooks", level: 90 },
        { name: "Git & GitHub", level: 80 },
        { name: "Google Colab", level: 85 },
        { name: "VS Code", level: 85 }
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Network Security", level: 60 },
        { name: "Ethical Hacking", level: 50 },
        { name: "Cryptography", level: 55 },
        { name: "Security Analysis", level: 65 }
      ]
    }
  ];

  const technologies = [
    "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", 
    "Seaborn", "Jupyter", "SQL", "Git", "GitHub", "Machine Learning", 
    "Deep Learning", "Data Visualization", "Statistical Analysis", "NLP",
    "Computer Vision", "Time Series", "Clustering", "Classification"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-up">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            Continuously expanding my technical expertise across data science, AI, and cybersecurity
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="glass p-8 rounded-2xl animate-fade-up hover:animate-glow transition-all duration-300"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="glass px-4 py-2 text-sm hover:scale-110 transition-transform duration-200 hover:animate-glow"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
