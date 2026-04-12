import { useState, useEffect } from "react";
import { 
  Monitor, Server, Brain, Wrench, Code, Database, 
  GitBranch, Cloud, Terminal, Cpu, Palette, Zap
} from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern frontend development with React ecosystem",
    icon: <Monitor className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-600",
    tech: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 90 },
      { name: "NextJS", level: 80 },
      { name: "Redux", level: 75 },
      { name: "Bootstrap", level: 70 },
      { name: "ShadCN", level: 85 }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Django framework and database management",
    icon: <Server className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-600",
    tech: [
      { name: "Django", level: 90 },
      { name: "Python", level: 95 },
      { name: "Redis", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 70 },
      { name: "AWS S3", level: 65 }
    ]
  },
  {
    id: "aiml",
    title: "AI & ML",
    description: "Machine learning and data science technologies",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-600",
    tech: [
      { name: "PyTorch", level: 75 },
      { name: "TensorFlow", level: 70 },
      { name: "Scikit-learn", level: 80 },
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Data Science", level: 85 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Services",
    description: "Development tools and version control",
    icon: <Wrench className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-600",
    tech: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Heroku", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Railway", level: 75 },
      { name: "npm", level: 90 },
      { name: "Chrome DevTools", level: 85 }
    ]
  }
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech-stack');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" className="py-0 bg-gradient-hero relative overflow-hidden flex flex-col justify-center">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 text-[15rem] md:text-[25rem] font-black text-black/[0.01] leading-none select-none -z-10 translate-y-[-10%] translate-x-[-10%] uppercase tracking-tighter">
        Stack
      </div>
      
      {/* Floating Particles and Themed Icons to match Hero armosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[5%] animate-pulse opacity-10 text-accent/30 blur-[1px]">
          <Zap className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute bottom-[20%] left-[8%] animate-bounce opacity-10 text-accent/25 blur-[2px]" style={{ animationDuration: '5s' }}>
          <Code className="w-14 h-14 -rotate-12" />
        </div>
        
        {/* Glittering Dots */}
        {[...Array(10)].map((_, i) => (
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
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10 pt-10">
        <div className="max-w-[95rem] mx-auto">
          {/* Enhanced Section Header */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md bg-white/40 border border-white/50 text-accent font-black text-[10px] uppercase tracking-widest mb-4 shadow-sm hover:scale-105 transition-transform">
              <Zap className="w-3.5 h-3.5 fill-accent" /> Technical Skills
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-tight tracking-tighter mb-4">
              Tech Stack &
              <span className="block gradient-text italic">Expertise</span>
            </h2>
            
            <p className="text-base text-[#1a1a1a]/60 leading-relaxed font-semibold max-w-2xl mx-auto">
              Technologies and frameworks I've mastered through hands-on experience 
              in full-stack development and machine learning projects.
            </p>
          </div>

          {/* Interactive Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {techCategories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setSelectedCategory(category.id)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                {/* Category Card */}
                <div className="backdrop-blur-md bg-white/60 border border-white/40 rounded-[2rem] p-6 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Icon Header */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="font-display text-2xl font-black text-[#1a1a1a] mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-[#1a1a1a]/40 font-bold text-xs mb-6 leading-tight">
                    {category.description}
                  </p>

                  {/* Tech Stack List */}
                  <div className="space-y-4">
                    {category.tech.map((tech, techIndex) => (
                      <div
                        key={tech.name}
                        className="relative group/tech"
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-black tracking-tight transition-colors flex-1 mr-3 ${
                            hoveredTech === tech.name ? 'text-accent' : 'text-[#1a1a1a]'
                          }`}>
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-accent/60 bg-accent/5 px-2 py-0.5 rounded-md">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden shadow-inner relative">
                          <div 
                            className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full transition-all duration-1000 delay-300 shadow-sm"
                            style={{ 
                              width: isVisible ? `${tech.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Particles on Hover */}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-accent/40 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent/30 rounded-full animate-pulse animation-delay-200" />
                    <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent/35 rounded-full animate-pulse animation-delay-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="glass-morphism rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="font-display text-3xl font-black gradient-text mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">1+</div>
                  <div className="text-sm text-[#1a1a1a]/60 font-black uppercase tracking-tighter">Year Pro Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">10+</div>
                  <div className="text-sm text-[#1a1a1a]/60 font-black uppercase tracking-tighter">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">100%</div>
                  <div className="text-sm text-[#1a1a1a]/60 font-black uppercase tracking-tighter">Delivery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">AI-Driven</div>
                  <div className="text-sm text-[#1a1a1a]/60 font-black uppercase tracking-tighter">Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
