import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  // إعداد particles
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans overflow-x-hidden relative">
      {/* مؤثر خلفية نجوم متحركة */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="pointer-events-none fixed inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fullScreen: false,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#8B5CF6", "#3B82F6", "#06B6D4"] },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
            links: { enable: true, distance: 120, color: "#8B5CF6", opacity: 0.2, width: 1 },
          },
          detectRetina: true,
        }}
      />
      {/* باقي الموقع */}
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-dark/90 backdrop-blur-md z-50 border-b border-primary/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          HexveilX
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-dark/95 backdrop-blur-md border-t border-primary/20">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a
              href="#home"
              className="block py-2 hover:text-primary transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a
              href="#skills"
              className="block py-2 hover:text-primary transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block py-2 hover:text-primary transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-primary transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">HexveilX</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Web developer & AI explorer crafting digital experiences with passion and precision
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <i className="fas fa-download mr-2"></i>
              Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-float"></div>
            <div className="absolute inset-4 bg-dark rounded-full flex items-center justify-center">
              <i className="fas fa-code text-6xl text-primary animate-pulse"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { icon: "fab fa-js-square", name: "JavaScript", color: "text-yellow-400" },
    { icon: "fab fa-python", name: "Python", color: "text-blue-400" },
    { icon: "fab fa-react", name: "React", color: "text-cyan-400" },
    { icon: "fab fa-html5", name: "HTML5", color: "text-orange-400" },
    { icon: "fab fa-css3-alt", name: "CSS3", color: "text-blue-500" },
    { icon: "fas fa-fire", name: "Firebase", color: "text-orange-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card group">
              <div className="bg-light p-8 rounded-2xl text-center hover:bg-primary/10 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-primary/25">
                <i className={`${skill.icon} text-5xl ${skill.color} mb-4 group-hover:animate-bounce`}></i>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      icon: "fas fa-robot",
      title: "AI Chat Bot",
      description: "Intelligent chatbot powered by machine learning algorithms for natural conversations.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Firebase backend.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Visualization Tool",
      description: "Interactive dashboard for data analysis and visualization using Python and D3.js.",
      gradient: "from-accent to-primary"
    },
    {
      icon: "fas fa-gamepad",
      title: "Web Game Engine",
      description: "2D game engine built with JavaScript and HTML5 Canvas for browser-based games.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App UI",
      description: "Modern mobile application interface design with React Native and Expo.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: "fas fa-brain",
      title: "ML Prediction Model",
      description: "Machine learning model for predictive analytics using TensorFlow and Python.",
      gradient: "from-red-500 to-yellow-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-light rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-6xl text-white`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300">
                  <i className="fab fa-github mr-2"></i>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "HexveilX delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and user experience was outstanding.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Working with HexveilX was a game-changer for our startup. The AI chatbot integration transformed our customer support completely.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthFirst",
      content: "The data visualization tool HexveilX built for us provides incredible insights. It's intuitive, fast, and beautifully designed.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contacts = [
    {
      icon: "fab fa-github",
      title: "GitHub",
      description: "Check out my repositories",
      link: "https://github.com/HexveilX"
    },
    {
      icon: "fab fa-discord",
      title: "Discord",
      description: "@Zezolz",
      link: "https://discord.com/users/Zezolz"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      description: "zyadalaa325@gmail.com",
      link: "mailto:zyadalaa325@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="max-w-6xl mx-auto">
          <p className="text-xl text-gray-300 mb-12 text-center">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Send me a message</h3>
              <ContactForm />
            </div>

            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Or reach out directly</h3>
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card group bg-light p-6 rounded-2xl hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <i className={`${contact.icon} text-3xl text-primary group-hover:animate-bounce`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{contact.title}</h4>
                      <p className="text-gray-300">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2025 HexveilX – Built with <span className="text-primary">React</span>, <span className="text-primary">Convex</span>, and <span className="text-red-500">❤️</span>
        </p>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary to-secondary p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-white text-xl"></i>
        </button>
      )}
    </>
  );
}
