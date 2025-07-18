import React, { useEffect, useRef, useState } from "react";

const TextScramble = ({ texts, speed = 80 }) => {
  const [currentText, setCurrentText] = useState("");
  const textRef = useRef(null);
  const indexRef = useRef(0);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    let queue = [];
    let frameRequest;
    let current = "";
    let next = texts[indexRef.current];

    const randomChar = () =>
      chars[Math.floor(Math.random() * chars.length)];

    const scramble = () => {
      const output = queue.map(({ from, to, start, end, char }) => {
        if (frame >= end) return to;
        if (frame >= start) {
          return Math.random() < 0.28 ? randomChar() : char;
        }
        return from;
      });
      setCurrentText(output.join(""));

      if (frame < Math.max(...queue.map(q => q.end))) {
        frame++;
        frameRequest = requestAnimationFrame(scramble);
      } else {
        setTimeout(() => {
          indexRef.current = (indexRef.current + 1) % texts.length;
          setText();
        }, 1200);
      }
    };

    const setText = () => {
      current = texts[indexRef.current];
      next = texts[(indexRef.current + 1) % texts.length];
      queue = [];

      const length = Math.max(current.length, next.length);
      for (let i = 0; i < length; i++) {
        const from = current[i] || "";
        const to = next[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end, char: from });
      }
      frame = 0;
      scramble();
    };

    setText();

    return () => cancelAnimationFrame(frameRequest);
  }, [texts]);

  return (

  <span
    ref={textRef}
    className="glitch font-bold text-glow text-3xl sm:text-4xl md:text-5xl"
    data-text={currentText}
    style={{ color: "hsl(var(--foreground))" }}
  >
    <span>{currentText}</span>
  </span>
);

};

export default TextScramble;
