import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={profilePhoto} 
                  alt="Professional headshot" 
                  className="w-full h-auto object-cover aspect-square"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-60 blur-2xl" />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wider uppercase text-sm">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Turning Ideas Into
                <span className="block text-accent">Reality</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a senior Computer Engineering student with a passion for creating 
                meaningful digital experiences. My journey in tech has been driven by 
                curiosity and a desire to solve real-world problems through code.
              </p>
              
              <p className="text-lg">
                With expertise spanning frontend development, backend systems, and modern 
                development tools, I bring ideas to life through clean code and thoughtful 
                design. Currently seeking internship opportunities where I can contribute 
                to innovative projects and continue growing as an engineer.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you'll find me exploring emerging technologies, 
                contributing to open-source projects, or working on personal projects 
                that push my technical boundaries.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Team Player", "Quick Learner", "Detail-Oriented"].map((trait) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium shadow-card border border-border"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform origin-top-right skew-y-2" />
    </section>
  );
};

export default About;
