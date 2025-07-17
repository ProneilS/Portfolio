import { Cpu, Brain, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Hardware Hacker + AI Explorer
            </h3>

            <p className="text-muted-foreground">
              I'm an Electronics & Instrumentation engineering student who loves
              building things—from intelligent hardware prototypes to full-blown
              AI systems. Whether it's deploying models on microcontrollers or
              designing immersive user interfaces, I'm all in.
            </p>

            <p className="text-muted-foreground">
              My work lives at the intersection of Embedded Systems, AI, and
              the Web. Projects like an AI-powered stethoscope, VR worlds, and
              responsive portfolio sites show how I fuse creativity with
              cutting-edge tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.docx" target="_blank" rel="noopener noreferrer"

                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Edge AI & ML</h4>
                  <p className="text-muted-foreground">
                    Building and optimizing AI models that run on microcontrollers and low-resource devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Embedded Systems</h4>
                  <p className="text-muted-foreground">
                    Crafting intelligent hardware using sensors, microcontrollers, and real-time data processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Developing responsive frontends and powerful backends to bring ideas to life on the web.
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
