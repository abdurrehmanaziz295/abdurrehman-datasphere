
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, BarChart3, TrendingUp, Shield, Users, Activity, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Titanic Survival Prediction",
      description: "Machine Learning classification model predicting passenger survival using logistic regression with comprehensive data analysis and feature engineering.",
      icon: <Users className="w-8 h-8" />,
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Logistic Regression"],
      features: ["Data Cleaning", "Feature Engineering", "Model Evaluation", "Visualization"],
      accuracy: "84%",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "House Price Prediction",
      description: "Regression analysis to predict real estate prices using multiple features with advanced preprocessing and model optimization techniques.",
      icon: <TrendingUp className="w-8 h-8" />,
      technologies: ["Python", "NumPy", "Scikit-learn", "Seaborn", "Linear Regression"],
      features: ["Data Preprocessing", "Outlier Detection", "Model Tuning", "Cross Validation"],
      accuracy: "87%",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "COVID-19 Data Analysis",
      description: "Comprehensive analysis of global COVID-19 trends with interactive visualizations and statistical insights into pandemic patterns.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
      features: ["Time Series Analysis", "Geographic Mapping", "Statistical Testing", "Interactive Plots"],
      accuracy: "N/A",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Fake News Detection",
      description: "NLP-powered system to identify misinformation using TF-IDF vectorization and Naive Bayes classification with text preprocessing.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Python", "NLTK", "TF-IDF", "Naive Bayes", "Text Processing"],
      features: ["Text Preprocessing", "Feature Extraction", "Model Training", "Prediction API"],
      accuracy: "91%",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Stock Price Prediction",
      description: "Time series forecasting model using LSTM neural networks to predict stock market trends with technical indicators analysis.",
      icon: <Activity className="w-8 h-8" />,
      technologies: ["Python", "TensorFlow", "LSTM", "Technical Analysis", "Time Series"],
      features: ["LSTM Networks", "Technical Indicators", "Backtesting", "Real-time Prediction"],
      accuracy: "76%",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Customer Segmentation",
      description: "Unsupervised learning project using K-Means clustering and PCA to identify customer segments for targeted marketing strategies.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "K-Means", "PCA", "Clustering", "Data Visualization"],
      features: ["Dimensionality Reduction", "Cluster Analysis", "Customer Profiling", "Business Insights"],
      accuracy: "N/A",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-up">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            Real-world data science projects showcasing machine learning, data analysis, and AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass border-border/50 hover:scale-105 transition-all duration-300 hover:animate-glow group animate-fade-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  {project.accuracy !== "N/A" && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {project.accuracy} Accuracy
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl mb-2 gradient-text">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button size="sm" className="flex-1 hero-gradient">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="flex-1 glass">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '1.0s' }}>
          <Button size="lg" variant="outline" className="glass hover:scale-105 transition-transform">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
