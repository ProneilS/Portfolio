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
          {/* Intro Text */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          </h1>

          {/* Glitch Name */}
          <h1
            className="glitch text-4xl sm:text-6xl font-bold animate-fade-in-delay-1"
            data-text="Proneil Sengupta"
          >
            Proneil Sengupta
          </h1>

          {/* Scramble Texts */}
          <div className="mt-4 animate-fade-in-delay-2">
            <TextScramble
              texts={["Engineer", "AI Builder", "Innovator", "Developer"]}
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm an innovator building intelligent systems that push boundaries. 
            From AI-powered hardware like my stethoscope to immersive sci-fi-inspired interfaces, 
            I bring code to life. I specialize in embedded systems, edge AI, 
            and futuristic interfaces — blending engineering precision with creative chaos.
          </p>

          {/* Glitch Tagline */}
          <h2
            className="glitch text-2xl sm:text-4xl font-bold animate-fade-in-delay-4"
            data-text="Let's build what doesn't exist yet."
          >
            Let's build what doesn't exist yet.
          </h2>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
