import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "HAUM Marketplace",
    description: "A comprehensive Django-based marketplace platform featuring user profiles, item listings, dashboard management, and real-time conversations. Built with modern web technologies and deployed with full production capabilities.",
    tech: ["Django", "Python", "JavaScript", "CSS", "HTML", "SQLite"],
    github: "https://github.com/miahangelato/HAUM",
    featured: true,
  },
  {
    title: "Jtify - Spotify Clone",
    description: "A full-featured Spotify clone with modern music streaming interface. Developed collaboratively with advanced frontend-backend integration using React for dynamic UI and Django for robust backend services.",
    tech: ["React", "Redux", "Django", "Redis", "JavaScript", "Python"],
    github: "https://github.com/JermainePasion/Jtify",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution built with Django framework, featuring real-time chat functionality powered by Redis, comprehensive product management, and secure payment processing.",
    tech: ["Django", "Redis", "Python", "JavaScript", "CSS", "HTML", "Websockets"],
    github: "https://github.com/miahangelato/SOFTDEV-FINAL",
    featured: false,
  },
  {
    title: "Coffee Shop Website",
    description: "Elegant and responsive coffee shop website showcasing modern design principles. Features interactive menu displays, customer reviews section, and smooth navigation with vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/miahangelato/COFFEE-SHOP",
    featured: false,
  },
  {
    title: "Numerical Calculator - Jacobi Method",
    description: "Advanced numerical computing application implementing the Jacobi iterative method for solving linear systems. Features interactive calculations with step-by-step solutions and mathematical visualizations.",
    tech: ["JavaScript", "CSS", "HTML", "Python", "Django"],
    github: "https://github.com/miahangelato/NUMERICAL",
    featured: false,
  },
  {
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website built with React and TypeScript. Features elegant animations, interactive components, and optimized performance using Vite build system and Tailwind CSS for styling.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    github: "https://github.com/miahangelato/portfolio.git",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background relative">
      {/* Decorative background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 animate-fade-in-up">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Featured Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Projects That
              <span className="block text-accent">Make an Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A curated selection of projects demonstrating my technical skills and 
              problem-solving abilities across various domains.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`
                  group relative animate-scale-in
                  ${project.featured ? 'lg:row-span-2' : ''}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group-hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-accent text-accent-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3 pt-6 mt-auto">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-accent text-accent-foreground hover:opacity-90"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-muted transform origin-top-left -skew-y-2" />
    </section>
  );
};

export default Projects;
