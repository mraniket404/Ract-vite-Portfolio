import { useEffect, useState } from "react";

export default function Typewriter() {
  const text = "Aniket Gosavi";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-bold text-center relative">
      {displayText}
      <span className="absolute top-full left-0 w-full text-center text-white/50 scale-x-[-1] opacity-60">
        {displayText}
      </span>
    </h1>
  );
}
