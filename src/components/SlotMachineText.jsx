import { useEffect, useState } from "react";

const SlotMachineText = ({ words, duration = 2000 }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setIdx((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(handle);
  }, [words.length, duration]);

  return (
    <div
      className="relative overflow-hidden h-6 inline-block align-middle"
      style={{ height: "1.5rem" }}
    >
      <div
        className="transition-transform ease-in-out"
        style={{
          transform: `translateY(-${idx * 1.5}rem)`,
          transitionDuration: "0.5s",
        }}
      >
        {words.map((w, i) => (
          <div key={i} className="h-6 text-primary text-lg font-semibold">
            {w}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotMachineText;
