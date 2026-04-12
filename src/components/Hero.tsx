import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Star, Cpu, Code2, CircuitBoard, Database, Binary, Component, Terminal, Monitor, Server, Layers, Settings, Globe, Shield, Zap, Flame, Rocket } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="h-screen min-h-[800px] flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20 pb-10">
      
      {/* Animated Glittering Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Scattered Elements */}
        <div className="absolute top-[10%] left-[5%] animate-pulse opacity-20 text-accent/40 blur-[1px]">
          <Cpu className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute top-[20%] right-[10%] animate-bounce opacity-25 text-accent/30 blur-[2px] transition-all duration-1000" style={{ animationDuration: '4s' }}>
          <Code2 className="w-16 h-16 -rotate-12" />
        </div>
        <div className="absolute bottom-[15%] left-[12%] animate-pulse opacity-20 text-accent/40 blur-[1px]">
          <CircuitBoard className="w-20 h-20" />
        </div>
        <div className="absolute top-[40%] right-[5%] animate-pulse opacity-15 text-accent/30 blur-[3px]">
          <Database className="w-10 h-10" />
        </div>
        <div className="absolute bottom-[30%] right-[15%] animate-bounce opacity-20 text-accent/40 blur-[1px]" style={{ animationDuration: '5s' }}>
          <Binary className="w-14 h-14 rotate-45" />
        </div>
        <div className="absolute top-[15%] left-[25%] animate-pulse opacity-10 text-accent/20 blur-[4px]">
          <Component className="w-24 h-24" />
        </div>

        {/* New Additional Glittering Elements */}
        <div className="absolute top-[5%] right-[25%] animate-pulse opacity-15 text-accent/30 blur-[1px]">
          <Terminal className="w-8 h-8 rotate-12" />
        </div>
        <div className="absolute top-[45%] left-[8%] animate-bounce opacity-20 text-accent/40" style={{ animationDuration: '3.5s' }}>
          <Monitor className="w-10 h-10 -rotate-3" />
        </div>
        <div className="absolute bottom-[40%] left-[2%] animate-pulse opacity-10 text-accent/30 blur-[2px]">
          <Server className="w-12 h-12 rotate-6" />
        </div>
        <div className="absolute bottom-[10%] right-[30%] animate-pulse opacity-25 text-accent/50 blur-[1px]">
          <Zap className="w-10 h-10 -rotate-12" />
        </div>
        <div className="absolute top-[60%] right-[2%] animate-bounce opacity-15 text-accent/30 blur-[1.5px]" style={{ animationDuration: '6s' }}>
          <Layers className="w-14 h-14 rotate-3" />
        </div>
        <div className="absolute top-[8%] left-[45%] animate-pulse opacity-10 text-accent/20 blur-[3px]">
          <Globe className="w-16 h-16" />
        </div>
        <div className="absolute bottom-[50%] right-[12%] animate-pulse opacity-15 text-accent/40">
          <Shield className="w-8 h-8 -rotate-12" />
        </div>
        <div className="absolute top-[35%] left-[18%] animate-bounce opacity-10 text-accent/20 blur-[2px]" style={{ animationDuration: '4.5s' }}>
          <Settings className="w-12 h-12 rotate-90" />
        </div>
        <div className="absolute bottom-[5%] left-[40%] animate-pulse opacity-15 text-accent/30">
          <Flame className="w-9 h-9" />
        </div>
        <div className="absolute top-[28%] right-[20%] animate-pulse opacity-10 text-accent/20 blur-[4px]">
          <Rocket className="w-20 h-20 -rotate-45" />
        </div>

        {/* Small Glittering Dots */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-accent/30 animate-pulse blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto relative flex flex-col items-center">
          
      


          {/* Enhanced Headline with Gradient Text */}
          <div className="text-center space-y-4 mt-16 mb-12 z-20 relative px-4">
            <h1 className="font-display text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter flex flex-col md:flex-row items-center justify-center gap-x-8 leading-[0.75] animate-fade-in drop-shadow-sm">
              <span className="text-[#1a1a1a] drop-shadow-sm">I'm</span> 
              <span className="gradient-text italic drop-shadow-xl relative">
                Miah Angela,
              </span>
            </h1>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#1a1a1a]/90 tracking-tight leading-[0.9] animate-fade-in animation-delay-200 uppercase">
              Computer Engineer
            </h2>
          </div>

          {/* Main Visual Stack */}
          <div className="relative w-full flex justify-center items-end mt-[-5%] lg:mt-[-8%]">
            
            {/* Enhanced Left Side Content */}
            <div className="absolute left-4 bottom-[28%] hidden xl:block max-w-[280px] text-left space-y-4 animate-slide-in-right magnetic-hover p-8 rounded-3xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl">
              <div className="w-16 h-1.5 bg-gradient-accent rounded-full mb-2" />
              <p className="text-2xl font-black text-[#1a1a1a] leading-tight gradient-text tracking-tight">
                Full-Stack & AI Engineer.
              </p>
              <p className="text-[0.95rem] text-[#1a1a1a]/80 font-bold leading-relaxed">
                Building scalable B2B platforms and intelligent, data-driven systems from concept to deployment.
              </p>
            </div>

            {/* Enhanced Central Circle Background */}
            <div className="absolute bottom-0 w-[85%] max-w-[800px] aspect-[2/1] bg-gradient-to-t from-accent/10 to-transparent rounded-t-full -z-10 blur-3xl opacity-60" />
            
            {/* Enhanced Main Profile Image */}
            <div className="relative z-10 w-full max-w-[580px] transition-all duration-1000 hover:scale-[1.01] -mb-2 group/image">
              {/* Enhanced Glow behind head */}
              <div 
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/20 blur-[140px] -z-10 transition-transform duration-1000 rounded-full"
                style={{
                  transform: `translate(-50%, -50%) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
                }}
              />
              
              <img 
                src={profilePhoto} 
                alt="Miah Angela" 
                className="w-full h-auto object-contain mx-auto mix-blend-normal filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] brightness-[1.02] contrast-[1.02]"
              />
            
            </div>

            {/* Enhanced Right Side Stats */}
            <div className="absolute right-4 bottom-[30%] hidden xl:block text-right space-y-4 animate-fade-in magnetic-hover p-8 rounded-3xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl">
              <div className="flex gap-1.5 justify-end mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent drop-shadow-md" />
                ))}
              </div>
              <div className="text-right">
                <p className="text-7xl font-black text-[#1a1a1a] tracking-tighter leading-none mb-1">Class</p>
                <p className="text-2xl font-black gradient-text tracking-[0.2em] uppercase">2026</p>
              </div>
              <div className="w-12 h-1 bg-gradient-accent rounded-full ml-auto mt-4" />
            </div>

          </div>

          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-4 text-[#1a1a1a]/20 hidden lg:flex">
            <div className="w-[1px] h-16 bg-current mx-auto" />
            <span className="[writing-mode:vertical-lr] uppercase tracking-[0.4em] text-[10px] font-bold">BS in Computer Engineering</span>
            <div className="w-[1px] h-16 bg-current mx-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
