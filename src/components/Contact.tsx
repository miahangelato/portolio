import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Let's Work
              <span className="block text-accent">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm currently seeking internship opportunities. Feel free to reach out 
              if you'd like to discuss potential collaborations or just want to connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-elegant disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className={`ml-2 h-4 w-4 ${isLoading ? "animate-pulse" : ""}`} />
                </Button>
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="space-y-8 animate-slide-in-right lg:pl-8">
              {/* Email */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-primary">
                  Direct Contact
                </h3>
                <a
                  href="mailto:to.miahangela@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">to.miahangela@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-primary">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/miah-angela-to/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground">linkedin.com/in/miah-angela-to</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/miahangelato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-foreground">github.com/miahangelato</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-gradient-primary rounded-2xl border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Available for Internships
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Currently seeking summer 2025 internship opportunities in 
                      software engineering and full-stack development.
                    </p>
                  </div>
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
