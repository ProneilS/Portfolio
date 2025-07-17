import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center text-white">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}{" "}
        <span className="opacity-70">All rights reserved.</span>{" "}
        <br className="sm:hidden" />
        <span
          className="glitch text-neon"
          data-text="Crafted in the dark by Proneil"
        >
          Crafted in the dark by <span className="font-bold">Proneil</span>
        </span>
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-colors animate-pulse-subtle border border-primary shadow-lg"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
