import { useState, useEffect } from "react";
import { ExternalLink, Github, Code, Rocket, Star } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const projects: Project[] = [
  {
    title: "AI Fingerprint Health Analyzer (Thesis)",
    description: "Multi-modal AI system for diabetes risk assessment and blood group prediction using fingerprint biometrics. Led end-to-end development: custom dataset collection, hardware integration, neural network training, and full-stack deployment.",
    tech: ["TensorFlow", "Python", "React", "FastAPI", "IoT Hardware", "Data Analysis"],
    github: "https://github.com/miahangelato/thesis-project.git",
    live: "https://drive.google.com/file/d/1uCLP9i89Fyp8kseCk6VIpDUW1IjaHrmD/view?usp=drive_link",
    featured: true,
    category: "Scientific",
    difficulty: "Advanced"
  },
  {
    title: "AI Travel Agent",
    description: "Intelligent travel planning assistant with strict guardrails, multi-language support, and a ChatGPT-style UI. Features automated itineraries, budget estimates, and secure server-side OpenRouter integration.",
    tech: ["Node.js", "Express", "Vanilla JS", "OpenRouter", "i18n", "CSS"],
    github: "https://github.com/miahangelato/AI-Travel-Agent-.git",
    live: "https://ai-travel-agent-sooty.vercel.app/",
    featured: true,
    category: "Full-Stack",
    difficulty: "Intermediate"
  },
  {
    title: "HAUM Marketplace",
    description: "A comprehensive Django-based marketplace platform featuring user profiles, item listings, dashboard management, and real-time conversations. Built with modern web technologies and deployed with full production capabilities.",
    tech: ["Django", "Python", "JavaScript", "CSS", "HTML", "SQLite"],
    github: "https://github.com/miahangelato/HAUM",
    featured: true,
    category: "Full-Stack",
    difficulty: "Advanced"
  },
  {
    title: "Jtify - Spotify Clone",
    description: "A full-featured Spotify clone with modern music streaming interface. Developed collaboratively with advanced frontend-backend integration using React for dynamic UI and Django for robust backend services.",
    tech: ["React", "Redux", "Django", "Redis", "JavaScript", "Python"],
    github: "https://github.com/JermainePasion/Jtify",
    featured: true,
    category: "Full-Stack",
    difficulty: "Advanced"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution built with Django framework, featuring real-time chat functionality powered by Redis, comprehensive product management, and secure payment processing.",
    tech: ["Django", "Redis", "Python", "JavaScript", "CSS", "HTML", "Websockets"],
    github: "https://github.com/miahangelato/SOFTDEV-FINAL",
    featured: false,
    category: "Full-Stack",
    difficulty: "Advanced"
  },
  {
    title: "Coffee Shop Website",
    description: "Elegant and responsive coffee shop website showcasing modern design principles. Features interactive menu displays, customer reviews section, and smooth navigation with vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/miahangelato/COFFEE-SHOP",
    featured: false,
    category: "Frontend",
    difficulty: "Beginner"
  },
  {
    title: "Numerical Calculator - Jacobi Method",
    description: "Advanced numerical computing application implementing the Jacobi iterative method for solving linear systems. Features interactive calculations with step-by-step solutions and mathematical visualizations.",
    tech: ["JavaScript", "CSS", "HTML", "Python", "Django"],
    github: "https://github.com/miahangelato/NUMERICAL",
    featured: false,
    category: "Scientific",
    difficulty: "Intermediate"
  },
  {
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website built with React and TypeScript. Features elegant animations, interactive components, and optimized performance using Vite build system and Tailwind CSS for styling.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    github: "https://github.com/miahangelato/portfolio.git",
    live: "#",
    featured: false,
    category: "Frontend",
    difficulty: "Intermediate"
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ["All", "Full-Stack", "Frontend", "Scientific"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Beginner": return "from-green-500 to-emerald-600";
      case "Intermediate": return "from-yellow-500 to-orange-600";
      case "Advanced": return "from-red-500 to-pink-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="projects" className="py-0 bg-gradient-hero relative overflow-hidden flex flex-col items-center justify-center">
      {/* Enhanced Local Background Elements */}
      <div className="absolute top-0 left-0 text-[15rem] md:text-[25rem] font-black text-black/[0.01] leading-none select-none -z-10 translate-y-[-10%] translate-x-[-10%] uppercase tracking-tighter">
        Work
      </div>
      
      {/* Glittering Background Elements to match Hero/About */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[8%] animate-pulse opacity-10 text-accent/30 blur-[1px]">
          <Star className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute bottom-[20%] right-[8%] animate-bounce opacity-10 text-accent/25 blur-[2px]" style={{ animationDuration: '6s' }}>
          <Code className="w-14 h-14 -rotate-12" />
        </div>
        
        {/* Glittering Dots */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-accent/20 animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full backdrop-blur-md bg-white/30 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest mb-4 magnetic-hover shadow-sm">
              <Rocket className="w-4 h-4" /> Featured Work
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[1] tracking-tighter mb-6 italic">
              Projects That
              <span className="block gradient-text not-italic">Make an Impact</span>
            </h2>
            
            <p className="text-xl text-[#1a1a1a]/70 leading-relaxed font-medium max-w-3xl mx-auto mb-6">
              A curated selection of projects demonstrating my technical skills and 
              problem-solving abilities across various domains of computer engineering.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all magnetic-hover ${
                    selectedCategory === category
                      ? "bg-gradient-accent text-white shadow-glow"
                      : "glass-morphism text-[#1a1a1a] hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* 3D Card Effect */}
                <div className="relative h-full glass-morphism rounded-3xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-500 preserve-3d">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col z-20">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        {project.featured && (
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-accent to-pink-500 text-white text-xs font-bold rounded-full mb-3">
                            <Star className="w-3 h-3" /> Featured
                          </div>
                        )}
                        <h3 className="font-display text-2xl font-black text-[#1a1a1a] group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Difficulty Badge */}
                      <div className={`px-3 py-2 bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white text-xs font-bold rounded-full`}>
                        {project.difficulty}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#1a1a1a]/70 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/50 text-[#1a1a1a] text-sm font-medium rounded-full border border-white/20 hover:bg-accent/20 hover:text-accent transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 glass-morphism border-accent/20 text-[#1a1a1a] hover:bg-accent hover:text-white transition-all group"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-accent text-white hover:shadow-glow hover:scale-105 transition-all"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-accent/10 to-pink-500/10 transition-opacity duration-300 ${
                    hoveredProject === project.title ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-gradient-accent text-white px-8 py-4 rounded-full font-black hover:shadow-glow hover:scale-105 transition-all magnetic-hover gap-3">
              <Code className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
