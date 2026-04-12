import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { User, Cpu, Code2, Rocket, ArrowRight, Sparkles, Award, Target, Brain, Database, Layout } from "lucide-react";
import resumeFile from "@/assets/To,Miah_Resume (4).pdf";

const About = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const skills = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: "AI & Machine Learning", 
      desc: "Predictive Modeling, Biometrics & Data Analysis",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      icon: <Database className="w-6 h-6" />, 
      title: "Backend Architecture", 
      desc: "REST APIs, B2B SaaS & Database Design",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      icon: <Layout className="w-6 h-6" />, 
      title: "Full-Stack Development", 
      desc: "Next.js, TypeScript & Modern UI/UX",
      gradient: "from-pink-500 to-rose-600"
    },
  ];

  const stats = [
    { number: "15+", label: "Tech Stack", icon: <Sparkles className="w-5 h-5" /> },
    { number: "1+", label: "Year Pro Experience", icon: <Award className="w-5 h-5" /> },
    { number: "100%", label: "End-to-End Delivery", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="flex items-center justify-center py-0 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 text-[15rem] md:text-[25rem] font-black text-black/[0.01] leading-none select-none -z-10 translate-y-[-10%] translate-x-[10%] uppercase tracking-tighter">
        About
      </div>
      
      {/* Floating Particles and Themed Icons to match Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] animate-pulse opacity-10 text-accent/30 blur-[1px]">
          <Cpu className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute bottom-[10%] right-[10%] animate-bounce opacity-10 text-accent/25 blur-[2px]" style={{ animationDuration: '4s' }}>
          <Code2 className="w-14 h-14 -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-accent/20 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-48 h-[1px] bg-gradient-to-l from-pink-500/20 to-transparent" />
        
        {/* Glittering Dots */}
        {[...Array(8)].map((_, i) => (
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

      <div className="container mx-auto px-4 lg:px-12 relative z-10 py-10 lg:py-20">
        <div className="max-w-[95rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full backdrop-blur-md bg-white/30 border border-white/40 text-accent font-bold text-xs uppercase tracking-widest magnetic-hover shadow-sm">
                <User className="w-4 h-4" /> About Me
              </div>
              
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[1] tracking-tighter">
                Engineering <span className="gradient-text italic">Elegance</span> In Every Byte.
              </h2>
              
              <p className="text-lg md:text-xl text-[#1a1a1a]/80 leading-relaxed font-semibold max-w-2xl">
                As a Computer Engineering graduate at Holy Angel University, I specialize in bridging complex backend logic with calm, intuitive interfaces. My focus lies in developing scalable B2B SaaS platforms and integrating AI-driven predictive models into real-world applications. I don't just write code; I architect structured, high-performing digital ecosystems where every component serves a clear purpose.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 py-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group p-3 rounded-2xl transition-all duration-300 hover:bg-white/40">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent/10 to-pink-500/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-sm">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-black gradient-text">{stat.number}</div>
                    <div className="text-[10px] text-[#1a1a1a]/60 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={resumeFile} 
                  download="Miah_Angela_Resume.pdf"
                  className="group flex items-center gap-3 bg-gradient-accent text-white px-8 py-4 rounded-full font-bold hover:shadow-glow hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  Download CV <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`group p-8 rounded-3xl border transition-all duration-500 magnetic-hover ${
                    index === 2 
                      ? 'sm:col-span-2 bg-gradient-accent text-white border-white/10 shadow-2xl hover:shadow-accent/40' 
                      : 'bg-white/60 backdrop-blur-sm border-white/40 hover:border-accent/30 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${skill.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight">{skill.title}</h3>
                  <p className={`font-bold text-[10px] uppercase tracking-widest ${
                    index === 2 ? 'text-white/60' : 'text-[#1a1a1a]/40'
                  }`}>
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
