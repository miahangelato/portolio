import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Send, MapPin, Calendar, Zap, Briefcase } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    
    setIsLoading(true);

    try {
      // Web3Forms - Simplest email solution
      const formDataObj = new FormData();
      formDataObj.append("access_key", "a7d63267-c3e9-4584-9935-172e97ff6794");
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("message", formData.message);
      formDataObj.append("cc", "mmto@student.hau.edu.ph"); // Copy to student email
      formDataObj.append("subject", `Portfolio Contact from ${formData.name}`);
      formDataObj.append("from_name", "Portfolio Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again or contact me directly via email.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-0 text-[15rem] md:text-[25rem] font-black text-black/[0.01] leading-none select-none -z-10 translate-y-[-10%] translate-x-[-10%] uppercase tracking-tighter">
        Contact
      </div>
      
      {/* Floating Particles and Themed Icons to match Hero/About */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] animate-pulse opacity-10 text-accent/30 blur-[1px]">
          <Mail className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute bottom-[10%] left-[10%] animate-bounce opacity-10 text-accent/25 blur-[2px]" style={{ animationDuration: '4s' }}>
          <Briefcase className="w-14 h-14 -rotate-12" />
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
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10 -mt-10 lg:-mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-morphism text-accent font-bold text-xs uppercase tracking-widest mb-6 magnetic-hover">
              <Mail className="w-4 h-4" /> Get In Touch
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-black text-[#1a1a1a] leading-[1.1] tracking-tighter mb-6">
              Let's Work
              <span className="block gradient-text">Together</span>
            </h2>
            
            <p className="text-xl text-[#1a1a1a]/70 leading-relaxed font-black">
              I'm currently seeking <span className="text-accent underline decoration-accent/30 underline-offset-4">Full-Stack & AI Engineering roles</span>. 
              Let's build something exceptional together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="glass-morphism rounded-3xl p-8 shadow-lg">
                <h3 className="font-display text-2xl font-black text-[#1a1a1a] mb-8">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`glass-morphism border-white/20 focus:border-accent focus:shadow-glow transition-all ${
                        errors.name ? 'border-red-400' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`glass-morphism border-white/20 focus:border-accent focus:shadow-glow transition-all ${
                        errors.email ? 'border-red-400' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`glass-morphism border-white/20 focus:border-accent focus:shadow-glow transition-all resize-none ${
                        errors.message ? 'border-red-400' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm font-medium">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-accent text-white font-black hover:shadow-glow hover:scale-105 transition-all magnetic-hover gap-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Info & Socials */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              {/* Quick Contact Cards */}
              <div className="grid gap-4">
                <div className="glass-morphism rounded-2xl p-6 hover:shadow-glow transition-all magnetic-hover">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-pink-500 text-white flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1a1a1a]/60 font-medium uppercase tracking-wider">Email</p>
                      <a 
                        href="mailto:to.miahangela@gmail.com"
                        className="text-[#1a1a1a] font-black hover:text-accent transition-colors"
                      >
                        to.miahangela@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-morphism rounded-2xl p-6 hover:shadow-glow transition-all magnetic-hover">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center shadow-lg">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1a1a1a]/60 font-medium uppercase tracking-wider">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/miah-angela-to/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] font-black hover:text-accent transition-colors"
                      >
                       linkedin.com/in/miah-angela-to
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-morphism rounded-2xl p-6 hover:shadow-glow transition-all magnetic-hover">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center shadow-lg">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1a1a1a]/60 font-medium uppercase tracking-wider">GitHub</p>
                      <a 
                        href="https://github.com/miahangelato"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] font-black hover:text-accent transition-colors"
                      >
                        github.com/miahangelato
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass-morphism rounded-3xl p-8 border border-accent/20 bg-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                  <h3 className="font-display text-2xl font-black gradient-text">
                    Open for Job Opportunities
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-black text-[#1a1a1a]">Role & Focus</p>
                      <p className="text-[#1a1a1a]/70 font-bold">Full-Stack & AI Engineer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-black text-[#1a1a1a]">Availability</p>
                      <p className="text-[#1a1a1a]/70 font-bold">Immediate | Full-Time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-black text-[#1a1a1a]">Location</p>
                      <p className="text-[#1a1a1a]/70 font-bold">Philippines | Remote Worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-black text-[#1a1a1a]">Response Time</p>
                      <p className="text-[#1a1a1a]/70 font-bold">Within a few hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-pink-500/10 rounded-2xl border border-accent/20">
                  <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">
                    <span className="font-bold text-accent">Pro tip:</span> For the fastest response, 
                    include details about your project timeline and what you're looking for in a collaborator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
