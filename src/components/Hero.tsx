import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-accent font-semibold tracking-wide text-lg md:text-xl">
              Hello, I'm Miah Angela TO
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight">
              A Computer Engineer
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Building The Future
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Senior year student specializing in full-stack development, passionate about 
            transforming complex problems into elegant digital solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={scrollToAbout}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-elegant px-8 py-6 text-base"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform origin-top-left -skew-y-2" />
    </section>
  );
};

export default Hero;
