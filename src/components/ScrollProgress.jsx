import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress");

    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener("scroll", updateProgressBar);
    updateProgressBar(); // Initial update

    return () => window.removeEventListener("scroll", updateProgressBar);
  }, []);

  return null; // This component just manages scroll bar width, no UI rendered here
}
