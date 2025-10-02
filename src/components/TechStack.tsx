const techStack = {
  frontend: [
    "React", "NextJS", "TypeScript", "JavaScript", 
    "HTML5", "CSS", "Tailwind CSS", "Bootstrap", "ShadCN", "Redux"
  ],
  backend: [
    "Django", "Python", "Redis", "SQLite", 
    "PostgreSQL", "REST APIs", "WebSockets", "AWS S3 Bucket",
  ],
  aiml: [
    "PyTorch", "TensorFlow", "Scikit-learn", "NumPy", 
    "Pandas", , "Machine Learning", "Data Science"
  ],
  tools: [
    "Git", "VS Code", "Postman", "GitHub", 
    "Heroku", "Chrome DevTools", "npm", "Postman", "Railway", "Vercel"
  ]
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Right Aligned */}
          <div className="max-w-3xl ml-auto mb-16 animate-slide-in-right text-right">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Technical Skills
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Tech Stack &
              <span className="block text-accent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and frameworks I've mastered through hands-on experience 
              in full-stack development and machine learning projects.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-elegant">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Frontend
                </h3>
                <p className="text-sm text-muted-foreground">
                  Modern frontend development with React ecosystem
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card text-card-foreground rounded-lg text-sm font-medium shadow-card border border-border hover:border-accent hover:shadow-elegant transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-elegant">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Backend
                </h3>
                <p className="text-sm text-muted-foreground">
                  Django framework and database management
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card text-card-foreground rounded-lg text-sm font-medium shadow-card border border-border hover:border-accent hover:shadow-elegant transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-elegant">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  AI & ML
                </h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning and data science technologies
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.aiml.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card text-card-foreground rounded-lg text-sm font-medium shadow-card border border-border hover:border-accent hover:shadow-elegant transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Services */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-elegant">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Tools & Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Development tools and version control
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card text-card-foreground rounded-lg text-sm font-medium shadow-card border border-border hover:border-accent hover:shadow-elegant transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform origin-top-right skew-y-2" />
    </section>
  );
};

export default TechStack;
