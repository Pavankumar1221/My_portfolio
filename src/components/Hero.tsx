import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Pavan Kumar
              </h1>
              <p className="text-xl md:text-2xl font-medium text-foreground/80">
                Web Developer & Designer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I create engaging, user-friendly websites and applications that combine creative design with technical excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover-border-effect border-2 border-transparent"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent text-foreground font-medium transition-all border-2 border-border hover-border-effect"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 hover-border-effect">
              <img 
                src="/lovable-uploads/7ab6c876-da74-47de-b824-8437b8202106.png" 
                alt="Pavan Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
