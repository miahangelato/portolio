import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
