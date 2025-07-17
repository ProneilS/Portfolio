import { ArrowDown } from "lucide-react";
import TextScramble from "./TextScramble"; // NOT @/components...



export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
              Hi, I'm
            </h1>

            <h1
              className="glitch text-4xl sm:text-6xl font-bold tracking-wide opacity-0 animate-fade-in-delay-2"
              data-text="Proneil Sengupta"
            >
              Proneil Sengupta
            </h1>
          </div>
     <div className="mt-4">
        <TextScramble texts={["Engineer", "AI Builder", "Innovator", "Developer"]} />
      </div>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I'm an innovator building intelligent systems that push boundaries. 
          From AI-powered hardware like my stethoscope to immersive sci-fi-inspired interfaces, 
          I bring code to life. I specialize in embedded systems, edge AI, 
          and futuristic interfaces — blending engineering precision with creative chaos. 
          
          <h1 className="glitch text-4xl sm:text-6xl font-bold " data-text="Let's build what doesn't exist yet.">
              Let's build what doesn't exist yet.
            </h1>
          </p>
          
          
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
