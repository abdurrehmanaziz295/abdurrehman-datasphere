
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abdurrehman.datascience@gmail.com",
      link: "mailto:abdurrehman.datascience@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@abdurrehman-ds",
      link: "https://github.com/abdurrehman-ds"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Abdurrehman - Data Scientist",
      link: "https://linkedin.com/in/abdurrehman-ds"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Available for Remote Work",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="section-padding container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-up">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            I'm always excited to discuss data science projects, collaboration opportunities, or just chat about AI and technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass border-border/50 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-border/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-border/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass border-border/50 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full hero-gradient">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in collaborating on a project, have questions about data science, 
                or just want to connect with a fellow tech enthusiast, I'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="text-primary mr-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Quick Response</h4>
              <p className="text-muted-foreground">
                I typically respond to emails within 24-48 hours. For urgent inquiries or collaboration opportunities, 
                feel free to reach out directly through LinkedIn or GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
