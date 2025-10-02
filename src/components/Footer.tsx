import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-bold mb-2">
                Miah Angela To
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Computer Engineering Student | Full-Stack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="mailto:to.miahangela@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/miah-angela-to/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/miahangelato"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Miah Angela To. Designed & developed with 💻 and ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
