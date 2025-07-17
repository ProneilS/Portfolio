import { useEffect } from "react";

export const GlitchCursor = () => {
  useEffect(() => {
    const trail = [];

    const createDot = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      document.body.appendChild(dot);

      trail.push(dot);
      if (trail.length > 20) {
        const oldDot = trail.shift();
        oldDot.remove();
      }

      setTimeout(() => dot.remove(), 500); // how long the dot stays
    };

    const handleMouseMove = (e) => {
      createDot(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trail.forEach(dot => dot.remove());
    };
  }, []);

  return null;
};
